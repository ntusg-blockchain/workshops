var Migrations = artifacts.require("./Migrations.sol");
var Ballot = artifacts.require("./Ballot.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Ballot, ["Trump","Dump","Jump","Hump"]);
};
