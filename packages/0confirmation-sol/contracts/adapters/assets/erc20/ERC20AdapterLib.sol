pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import { Create2 } from "openzeppelin-solidity/contracts/utils/Create2.sol";
import { IERC20 } from "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";
import { ModuleLib } from "../../lib/ModuleLib.sol";
import { AssetForwarder } from "../../lib/AssetForwarder.sol";

library ERC20AdapterLib {
  struct EscrowRecord {
    address recipient;
    address token;
  }
  struct Isolate {
    EscrowRecord[] payments;
    bool isProcessing;
    uint256 processed;
  }
  function isDone(Isolate storage isolate) internal view returns (bool) {
    return !isolate.isProcessing && isolate.payments.length == isolate.processed;
  }
  function computeIsolatePointer() public pure returns (uint256) {
    return uint256(keccak256("isolate.erc20-adapter"));
  }
  function computeForwarderSalt(uint256 index) internal pure returns (bytes32) {
    return keccak256(abi.encodePacked(index));
  }
  function computeForwarderAddress(uint256 index) internal view returns (address) {
    return Create2.computeAddress(computeForwarderSalt(index), keccak256(type(AssetForwarder).creationCode));
  }
  function liquidate() internal returns (bool) {
    ERC20AdapterLib.Isolate storage isolate = getIsolatePointer();
    return processEscrowReturns(isolate);
  }
  struct TransferInputs {
    address recipient;
    uint256 amount;
  }
  function decodeTransferInputs(bytes memory args) internal pure returns (TransferInputs memory) {
    (address recipient, uint256 amount) = abi.decode(args, (address, uint256));
    return TransferInputs({
      recipient: recipient,
      amount: amount
    });
  }
  function forwardEscrow(EscrowRecord memory record, uint256 index) internal {
    address forwarder = Create2.deploy(0, computeForwarderSalt(index), type(AssetForwarder).creationCode);
    AssetForwarder(forwarder).forwardAsset(address(uint160(record.recipient)), record.token);
  }
  function returnEscrow(EscrowRecord memory record, uint256 index) internal {
    address forwarder = Create2.deploy(0, computeForwarderSalt(index), type(AssetForwarder).creationCode);
    AssetForwarder(forwarder).forwardAsset(address(uint160(address(this))), record.token);
  }
  uint256 constant MINIMUM_GAS_TO_PROCESS = 5e5;
  uint256 constant MAX_RECORDS = 100;
  function processEscrowForwards(Isolate storage isolate) internal returns (bool) {
    if (!isolate.isProcessing) isolate.isProcessing = true;
    for (uint256 i = isolate.processed; i < isolate.payments.length; i++) {
      if (gasleft() < MINIMUM_GAS_TO_PROCESS) {
        isolate.processed = i;
        return false;
      } else {
        forwardEscrow(isolate.payments[i], i);
      }
    }
    return true;
  }
  function processEscrowReturns(Isolate storage isolate) internal returns (bool) {
    if (!isolate.isProcessing) isolate.isProcessing = true;
    for (uint256 i = isolate.processed; i < isolate.payments.length; i++) {
      if (gasleft() < MINIMUM_GAS_TO_PROCESS) {
        isolate.processed = i;
        return false;
      } else {
        returnEscrow(isolate.payments[i], i);
      }
    }
    return true;
  }
  function getCastStorageType() internal pure returns (function (uint256) internal pure returns (Isolate storage) swap) {
    function (uint256) internal returns (uint256) cast = ModuleLib.cast;
    assembly {
      swap := cast
    }
  }
  function toIsolatePointer(uint256 key) internal pure returns (Isolate storage) {
    return getCastStorageType()(key);
  }
  function getIsolatePointer() internal pure returns (Isolate storage) {
    return toIsolatePointer(computeIsolatePointer());
  }
}