const ethers = require('ethers');
const DKBToken = artifacts.require('DKBToken');
module.exports = async function (deployer) {
  const initiaSupply = ethers.parseEther('1000000000');
  console.log(initiaSupply, 'initiaSupply')
  await deployer.deploy(DKBToken, initiaSupply)
};
