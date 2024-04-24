const { ethers } = require("hardhat");

async function main() {
  const Voting = await ethers.getContractFactory("newVoting");
  const voting_contract = await Voting.deploy();
  await voting_contract.deployed();
  console.log("Contract deployed to address:", voting_contract.address);

  // //add candidate
  // const transactionResponse = await voting_contract.addCandidate(12);
  // await transactionResponse.wait(1);

  // //add voter
  // const addVoter = await voting_contract.addVoter(
  //   "0xC24c51F0E4db31A30188e74Bce43086182fDE2E2"
  // );
  // await addVoter.wait(1);

  // //give vote
  // const x = await voting_contract.giveVote(12);
  // await x.wait(1);

  // //view votes
  // const numberOfVotes = await voting_contract.viewVotes(12);
  // console.log(`Number of votes=${numberOfVotes.toNumber()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//wallet management-client and server side
//aggregator pipieline mongodb
//open sea
