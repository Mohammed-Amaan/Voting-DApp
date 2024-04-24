import React, { useState } from "react";
import VotesPage from "./votesPage";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../../contractConstants.js";
import ConnectButton from "../components/connectButton.jsx";

//document.getElementById("connectButton");

const handleClick = () => {
  document.getElementById("id").value = "";
};
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const id = form.id.value;
  console.log(id);
  //console.log(typeof id);
  vote(id);
};
async function vote(id) {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractFactory = new ethers.Contract(contractAddress, abi, signer);
      const x = await contractFactory.giveVote(id);
      await x.wait(1);

      const numberOfVotes = await contractFactory.viewVotes(id);
      console.log(numberOfVotes.toString());
      updateDb(id, numberOfVotes);
    }
  } catch (error) {
    console.log(error);
  }
}
async function updateDb(id, numberOfVotes) {
  try {
    const update = await fetch(`http://localhost:5858/candidate/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ NumberOfVotes: `${numberOfVotes}` }),
    });
  } catch (error) {
    console.log(error);
  }
}

const VoterPage = () => {
  return (
    <>
      <VotesPage />
      <ConnectButton />
      <div className="items-center h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="id"
                placeholder="Enter Candidate's ID"
                className="border border-gray-400 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleClick}
                className="bg-green-200 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-md focus:outline-none"
              >
                Clear
              </button>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
              >
                VOTE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoterPage;
