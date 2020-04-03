pragma solidity ^0.6.0;

interface IBorrowProxyController {
  function getProxyOwnerHandler() external returns (address);
  function validateProxyRecordHandler(bytes calldata) external returns (bool);
}
