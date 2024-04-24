import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "../../../contractConstants";
import BigNumber from "bignumber.js";
//import Candidate from "../../../backend/models/candidate.model";
const VotesPage = () => {
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
    //checkModifiedVotes();
  }, [setCandidates]);

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
                  {
                    /* {checkModifiedVotes(
                    candidate.NumberOfVotes,
                    candidate.CandidateId
                  )} */
                    candidate.NumberOfVotes
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VotesPage;
