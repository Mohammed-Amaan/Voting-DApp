import React from "react";
import Navbar from "./navbar";
import ConnectButton from "../components/connectButton";
import { abi, contractAddress } from "../../../contractConstants";
import { ethers } from "ethers";

const AdminPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const CandidateId = form.id.value;
    const name = form.name.value;
    const position = form.position.value;
    const sendData = { CandidateId, name, position };
    addCandidateToBlockchain(CandidateId);
    try {
      const candidate = await fetch("http://localhost:5858/candidate/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      });
      console.log(candidate);
    } catch (error) {
      console.log(error);
    }
  };
  async function addCandidateToBlockchain(id) {
    {
      try {
        if (typeof window.ethereum !== "undefined") {
          //provider //signer //contract we are interacting with // abi and address
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          console.log(signer);
          const account = await ethereum.request({ method: "eth_accounts" });
          const contractFactory = new ethers.Contract(
            contractAddress,
            abi,
            signer
          );
          const x = await contractFactory.addCandidate(id);
          await x.wait(1);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="bg-blue-100 flex items-center justify-center h-screen">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <ConnectButton />
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-4">Enroll Candidate</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter candidate's name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id"
            >
              ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder="Enter candidate's ID"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="position"
            >
              Position
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="position"
              type="text"
              placeholder="Enter candidate's position"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Enroll
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
