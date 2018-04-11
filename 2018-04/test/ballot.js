const Ballot = artifacts.require('./Ballot.sol');

contract("Ballot contract", accounts => {
  describe('Constructor',  () => {
    it('chairperson is correctly instantiated', ()=> {
      return Ballot.deployed().then(instance => {
        return instance.chairperson().then(chairperson => {
          assert.equal(chairperson, accounts[0], 'Chairperson is not contract creator');
        });
      });
    });
  });
});
