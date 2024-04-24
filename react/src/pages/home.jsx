import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <div className="bg-blue-100 flex flex-col items-center justify-center h-screen">
        <div className="text-center mb-4 text-3xl">
          <h1>Welcome to Decentralised Voting Application</h1>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">Signup as </h2>
          <div className="flex space-x-4">
            <Link
              to="/auth/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Admin
            </Link>
            <Link
              to="/auth/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Candidate
            </Link>
            <Link
              to="/auth/signup"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Voter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
