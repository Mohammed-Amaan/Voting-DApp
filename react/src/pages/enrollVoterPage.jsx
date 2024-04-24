import React from "react";
import ConnectButton from "../components/connectButton";
import { errors, ethers } from "ethers";
import { abi, contractAddress } from "../../../contractConstants";

const EnrollVoterPage = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const address = form.address.value;
    whitelistVoter(address);
  }
  async function whitelistVoter(address) {
    try {
      if (typeof window.ethereum !== "undefined") {
        //provider //signer //contract we are interacting with // abi and address
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        //const account = await ethereum.request({ method: "eth_accounts" });
        const contractFactory = new ethers.Contract(
          contractAddress,
          abi,
          signer
        );
        const x = await contractFactory.addVoter(`${address}`);
        await x.wait(1);
      }
    } catch (error) {
      const voterError = error;
    }
  }
  return (
    <div className="bg-blue-100 flex items-center justify-center h-screen">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <ConnectButton />
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold mb-4">Whitelist a Voter</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="voter address"
            >
              Voter Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter voters address"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Add Voter
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollVoterPage;
