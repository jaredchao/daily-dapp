const ethers = require('ethers');
const DKBToken = artifacts.require('DKBToken');
module.exports = async function (deployer) {
  const initiaSupply = ethers.parseEther('1000000000');
  await deployer.deploy(DKBToken, initiaSupply)
};
