const kovan = require('../environments/kovan');
const BorrowProxyLib = artifacts.require('BorrowProxyLib');
const ShifterPool = artifacts.require('ShifterPool');
const UniswapAdapter = artifacts.require('UniswapAdapter');
const SimpleBurnLiquidationModule = artifacts.require('SimpleBurnLiquidationModule');
const ERC20Adapter = artifacts.require('ERC20Adapter');
const LiquidityToken = artifacts.require('LiquidityToken');
const CurveAdapter = artifacts.require('CurveAdapter');
const ShifterRegistryMock = artifacts.require('ShifterRegistryMock');
const Zero = require('@0confirmation/sdk');
const Curvefi = require('@0confirmation/curvefi/build/Curvefi');
const DAI = artifacts.require('DAI');
const Exchange = artifacts.require('Exchange');
const Factory = artifacts.require('Factory');
const ethers = require('ethers');
const fs = require('fs');

const ModuleTypes = {
  BY_CODEHASH: 1,
  BY_ADDRESS: 2
};

const getAddress = (artifact) => {
  const highest = Math.max(...Object.keys(artifact.networks).map((v) => Number(v)));
  return artifact.networks[highest].address;
};

const NO_SUBMODULE = '0x' + Array(40).fill('0').join('');

module.exports = async function(deployer) {
  await deployer.deploy(BorrowProxyLib);
  await deployer.link(BorrowProxyLib, ShifterPool);
  await deployer.deploy(ShifterPool);
  await deployer.deploy(ERC20Adapter);
  let shifterRegistry, renbtc, factory, renbtcExchange;
  if (deployer.network === 'ganache') {
    await deployer.deploy(ShifterRegistryMock);
    shifterRegistry = await ShifterRegistryMock.deployed();
    renbtc = { address: await shifterRegistry.token() };
    await deployer.deploy(Factory);
    await deployer.deploy(Exchange);
    factory = await Factory.deployed();
    let template = await Exchange.deployed();
    await factory.initializeFactory(template.address);
    const receipt = await factory.createExchange(renbtc.address);
    renbtcExchange = {
      address: receipt.logs[0].args.exchange
    };
  } else {
    renbtc = { address: kovan.renbtc };
    shifterRegistry = { address: kovan.shifterRegistry };
    factory = { address: kovan.factory };
    renbtcExchange = { address: kovan.renbtcExchange };
  } 
  const shifterPool = await ShifterPool.deployed();
  await deployer.deploy(CurveAdapter, getAddress(Curvefi, deployer.network_id));
  await deployer.deploy(UniswapAdapter, factory.address);
  await deployer.deploy(DAI);
  await deployer.deploy(SimpleBurnLiquidationModule, factory.address);
  await deployer.deploy(LiquidityToken, shifterPool.address, renbtc.address, 'zeroBTC', 'zeroBTC', 8);
  await deployer;
  const liquidityToken = await LiquidityToken.deployed();
  const uniswapAdapter = await UniswapAdapter.deployed();
  const curveAdapter = await CurveAdapter.deployed();
  const erc20Adapter = await ERC20Adapter.deployed();
  const simpleBurnLiquidationModule = await SimpleBurnLiquidationModule.deployed();
  await shifterPool.setup(shifterRegistry.address, '1000', ethers.utils.parseEther('0.01'), [{
    moduleType: ModuleTypes.BY_CODEHASH,
    target: renbtcExchange.address,
    sigs: Zero.getSignatures(Exchange.abi),
    module: {
      isPrecompiled: false,
      assetSubmodule: uniswapAdapter.address,
      repaymentSubmodule: '0x' + Array(40).fill('0').join(''),
      liquidationSubmodule: simpleBurnLiquidationModule.address
    }
  }, {
    moduleType: ModuleTypes.BY_ADDRESS,
    target: getAddress(Curvefi),
    sigs: Zero.getSignatures(Curvefi.abi),
    module: {
      isPrecompiled: false,
      assetSubmodule: curveAdapter.address,
      repaymentSubmodule: NO_SUBMODULE,
      liquidationSubmodule: simpleBurnLiquidationModule.address
    }
  }, {
    moduleType: ModuleTypes.BY_ADDRESS,
    target: renbtc.address,
    sigs: Zero.getSignatures(LiquidityToken.abi),
    module: {
      isPrecompiled: false,
      assetSubmodule: erc20Adapter.address,
      repaymentSubmodule: erc20Adapter.address,
      liquidationSubmodule: NO_SUBMODULE
    }
  }, {
    moduleType: ModuleTypes.BY_ADDRESS,
    target: (await DAI.deployed()).address,
    sigs: Zero.getSignatures(LiquidityToken.abi),
    module: {
      isPrecompiled: false,
      assetSubmodule: erc20Adapter.address,
      repaymentSubmodule: erc20Adapter.address,
      liquidationSubmodule: NO_SUBMODULE
    }
  }],
  [{
    token: renbtc.address,
    liqToken: liquidityToken.address
  }]);
};
