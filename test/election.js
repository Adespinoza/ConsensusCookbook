//Load Election.sol smart contract and store it in a variable
var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  //create an election instance
  var electionInstance;

  //Usage of chai and mocha javascript libraries

  //Test1: contract was initialized with the correct number of recipes by checking the cookbook’s count.
  it("initializes with eight recipes list", function() {
    return Election.deployed().then(function(instance) {
      return instance.candidatesCount();
    }).then(function(count) {
      assert.equal(count, 8);
    });
  });

  //Test2 :Inspects the values of each recipe in the voting, ensuring that each recipe has the correct id, name, and vote count.
  it("it initializes the candidates with the correct values", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidates(1);
    }).then(function(candidate) {
      assert.equal(candidate[0], 1, "has correct id");
      assert.equal(candidate[1], "Candidate 1", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
      return electionInstance.candidates(2);
    }).then(function(candidate) {
      assert.equal(candidate[0], 2, "has correct id");
      assert.equal(candidate[1], "candidate 2", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
      return electionInstance.candidates(3);
    }).then(function(candidate) {
      assert.equal(candidate[0], 3, "has correct id");
      assert.equal(candidate[1], "candidate 3", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
      return electionInstance.candidates(4);
    }).then(function(candidate) {
      assert.equal(candidate[0], 4, "has correct id");
      assert.equal(candidate[1], "candidate 4", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
      return electionInstance.candidates(5);
    }).then(function(candidate) {
      assert.equal(candidate[0], 5, "has correct id");
      assert.equal(candidate[1], "candidate 5", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
      return electionInstance.candidates(6);
    }).then(function(candidate) {
      assert.equal(candidate[0], 6, "has correct id");
      assert.equal(candidate[1], "candidate 6", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
      return electionInstance.candidates(7);
    }).then(function(candidate) {
      assert.equal(candidate[0], 7, "has correct id");
      assert.equal(candidate[1], "candidate 7", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
      return electionInstance.candidates(8);
    }).then(function(candidate) {
      assert.equal(candidate[0], 8, "has correct id");
      assert.equal(candidate[1], "candidate 3", "has correct name");
      assert.equal(candidate[2], 0, "has correct votes count");
    });
  });

  //Test3: Test that the function increments the vote count for the recipe.
  it("allows a voter to cast a vote", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      candidateId = 1;
      return electionInstance.vote(candidateId, { from: accounts[0] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "votedEvent", "the event type is correct");
      assert.equal(receipt.logs[0].args._candidateId.toNumber(), candidateId, "the candidate id is correct");
      return electionInstance.voters(accounts[0]);
    }).then(function(voted) {
      assert(voted, "the voter was marked as voted");
      return electionInstance.candidates(candidateId);
    }).then(function(candidate) {
      var voteCount = candidate[2];
      assert.equal(voteCount, 1, "increments the candidate's vote count");
    })
  });

  //Test4: Test that the voter is added to the mapping whenever they vote.
  it("throws an exception for invalid candiates", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.vote(99, { from: accounts[1] })
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
      return electionInstance.candidates(1);
    }).then(function(candidate1) {
      var voteCount = candidate1[2];
      assert.equal(voteCount, 1, "candidate 1 did not receive any votes");
      return electionInstance.candidates(2);
    }).then(function(candidate2) {
      var voteCount = candidate2[2];
      assert.equal(voteCount, 0, "candidate 2 did not receive any votes");
      return electionInstance.candidates(3);
    }).then(function(candidate3) {
      var voteCount = candidate3[2];
      assert.equal(voteCount, 0, "candidate 3 did not receive any votes");
      return electionInstance.candidates(4);
    }).then(function(candidate4) {
      var voteCount = candidate4[2];
      assert.equal(voteCount, 0, "candidate 4 did not receive any votes");
      return electionInstance.candidates(5);
    }).then(function(candidate5) {
      var voteCount = candidate5[2];
      assert.equal(voteCount, 0, "candidate 5 did not receive any votes");
      return electionInstance.candidates(6);
    }).then(function(candidate6) {
      var voteCount = candidate6[2];
      assert.equal(voteCount, 0, "candidate 6 did not receive any votes");
      return electionInstance.candidates(7);
    }).then(function(candidate7) {
      var voteCount = candidate7[2];
      assert.equal(voteCount, 0, "candidate 7 did not receive any votes");
      return electionInstance.candidates(8);
    }).then(function(candidate8) {
      var voteCount = candidate8[2];
      assert.equal(voteCount, 0, "candidate 8 did not receive any votes");
      
      
    });
  });

  //Test5: Prevent Double voting.
  it("throws an exception for double voting", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      candidateId = 2;
      electionInstance.vote(candidateId, { from: accounts[1] });
      return electionInstance.candidates(candidateId);
    }).then(function(candidate) {
      var voteCount = candidate[2];
      assert.equal(voteCount, 1, "accepts first vote");
      // Try to vote again
      return electionInstance.vote(candidateId, { from: accounts[1] });
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
      return electionInstance.candidates(1);
    }).then(function(candidate1) {
      var voteCount = candidate1[2];
      assert.equal(voteCount, 1, "candidate 1 did not receive any votes");
      return electionInstance.candidates(2);
    }).then(function(candidate2) {
      var voteCount = candidate2[2];
      assert.equal(voteCount, 1, "candidate 2 did not receive any votes");
      return electionInstance.candidates(3);
    }).then(function(candidate3) {
      var voteCount = candidate3[2];
      assert.equal(voteCount, 1, "candidate 3 did not receive any votes");
      return electionInstance.candidates(4);
    }).then(function(candidate4) {
      var voteCount = candidate4[2];
      assert.equal(voteCount, 1, "candidate 4 did not receive any votes");
      return electionInstance.candidates(5);
    }).then(function(candidate5) {
      var voteCount = candidate5[2];
      assert.equal(voteCount, 1, "candidate 5 did not receive any votes");
      return electionInstance.candidates(6);
    }).then(function(candidate6) {
      var voteCount = candidate6[2];
      assert.equal(voteCount, 1, "candidate 6 did not receive any votes");
      return electionInstance.candidates(7);
    }).then(function(candidate7) {
      var voteCount = candidate7[2];
      assert.equal(voteCount, 1, "candidate 7 did not receive any votes");
      return electionInstance.candidates(8);
    }).then(function(candidate8) {
      var voteCount = candidate8[2];
      assert.equal(voteCount, 1, "candidate 8 did not receive any votes");
    });
  });
});
