import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../../contractConstants";
import BigNumber from "bignumber.js";
//import Candidate from "../../../backend/models/candidate.model";
const Test = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5858/candidate/view", {
          method: "GET",
        });
        const data = await response.json();
        //console.log(data);
        setCandidates(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    checkModifiedVotes();
  }, [setCandidates]);

  async function checkModifiedVotes(numVotes, id) {
    const ID = String(id);

    const votesFromDB = numVotes;
    console.log(votesFromDB);

    const votesFromBlockchain = await checkVoteFromBlockchain(ID, votesFromDB);
    const y = votesFromBlockchain.toNumber();
    if (votesFromBlockchain != votesFromDB) {
      return "Vote has been modified";
    } else {
      return y;
    }
  }
  async function checkVoteFromBlockchain(ID) {
    try {
      if (typeof window.ethereum !== "undefined") {
        //provider //signer //contract we are interacting with // abi and address
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contractFactory = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );
        //console.log(typeof id);

        const x = await contractFactory.viewVotes(1961);
        //console.log(x.toNumber());
        return x;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">List Of Candidates</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Position</th>
              <th className="border border-gray-400 px-4 py-2">
                Number Of Votes
              </th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate._id} className="border border-gray-400">
                <td className="border border-gray-400 px-4 py-2">
                  {candidate.CandidateId}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {candidate.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {candidate.position}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {checkModifiedVotes(
                    candidate.NumberOfVotes,
                    candidate.CandidateId
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;
