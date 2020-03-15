'use strict';

const Zero = require('../..');
const makeProvider = require('./provider');
const kovan = require('@0confirmation/sol/environments/kovan');
const crypto = require('crypto');
const keeperProvider = makeProvider.promisified('a6e0d86b30d7dec75f04650a7eb2b116aa9155ae97f78075b27bcc46f74577c9');
const borrowerProvider = makeProvider.promisified('19d2141ad51975b3eff39899ca92908a37e084d20d0821d4db0a819a6412114d');
const utils = require('ethers/utils');

const timeout = (n) => new Promise((resolve) => setTimeout(resolve, n));

const makeZero = async (provider) => {
  const zero = new Zero({
    backends: {
      ethereum: {
        provider
      },
      btc: {
        network: 'testnet'
      },
      renvm: {
        network: 'devnet'
      },
      zero: {
        multiaddr: 'lendnet',
        dht: true
      }
    },
    shifterPool: kovan.shifterPool
  });
  await zero.initializeDriver();
  console.log('waiting for peer bootstrap')
  await timeout(5000);
  return zero;
};

const nodeUtil = require('util');
const ln = (v, desc) => ((console.log(desc + ': ')), (console.log(nodeUtil.inspect(v, { colors: true, depth: 3 }))), v);

(async () => {
  const keeper = await makeZero(keeperProvider);
  const borrower = await makeZero(borrowerProvider);
  await keeper.listenForLiquidityRequests(async (v) => {
    ln(v, 'liquidity request received');
    ln(v.depositAddress, 'deposit here');
    console.log('waiting for deposit ...');
    const utxo = await v.waitForDeposit();
    ln(utxo, 'utxo wrapper created, submit to renvm');
    const result = await utxo.submitToRenVM();
    ln(result, 'renvm result');
  });
  const liquidityRequest = borrower.createLiquidityRequest({
    token: kovan.renbtc,
    amount: utils.parseUnits('0.0001', 'gwei').toString(),
    nonce: '0x597cd2eac526216488ef8b893d740e426142fb863f5f00e2c0918458041d13c4',
    gasRequested: utils.parseEther('0.01').toString()
  });
  ln(liquidityRequest, 'liquidity request');
  const liquidityRequestParcel = await liquidityRequest.sign();
  ln(liquidityRequestParcel, 'signed liquidity request (parcel)');
  await timeout(5000);
  console.log('broadcasting ...');
  await liquidityRequestParcel.broadcast();
})().catch((err) => console.error(err));
