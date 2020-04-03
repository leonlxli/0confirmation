pragma solidity ^0.6.0;

import { ShifterERC20Mock } from "./ShifterERC20Mock.sol";

contract ShifterMock {
  address public token;
  constructor() public {
    token = address(new ShifterERC20Mock());
  }
  function shiftIn(bytes32 /* pHash */, uint256 amount , bytes32 /* nHash */, bytes memory /* darknode signature */) public returns (uint256) {
    ShifterERC20Mock(token).mint(msg.sender, amount);
    return amount;
  }
}
    
