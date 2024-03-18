const PunchCard = artifacts.require('PunchCard');

module.exports = async function (deployer) {
  await deployer.deploy(PunchCard)
};
