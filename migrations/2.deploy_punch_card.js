const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const PunchCard = artifacts.require('PunchCard');

module.exports = async function (deployer) {
  await deployProxy(PunchCard, [], { deployer, initializer: 'initialize' });
};
