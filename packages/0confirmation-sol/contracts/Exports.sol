pragma solidity ^0.6.2;
pragma experimental ABIEncoderV2;

import { ShifterBorrowProxyLib } from "./ShifterBorrowProxyLib.sol";

contract Exports {
  event ProxyRecordExport(ShifterBorrowProxyLib.ProxyRecord record);
  event TriggerParcelExport(ShifterBorrowProxyLib.TriggerParcel record);
}
