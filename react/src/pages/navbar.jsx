import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigateTo = useNavigate();
  function handleClick() {
    axios.get("http://localhost:5858/auth/logout", {
      withCredentials: true,
    });
    navigateTo("/");
  }
  return (
    <nav className="bg-red-400  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white font-semibold hover:bg-green-400 rounded  "
        >
          HOME
        </Link>

        <div>
          <Link to="/admin" className="text-white font-semibold mr-4">
            Enroll Candidate
          </Link>
        </div>
        <div>
          <Link
            to="/admin/enrollVoter"
            className="text-white font-semibold mr-4"
          >
            Enroll Voter
          </Link>
        </div>
        <div>
          <Link to="/voter" className="text-white font-semibold mr-4">
            Vote
          </Link>
        </div>
        <div>
          <Link to="/votes" className="text-white font-semibold mr-4">
            View Votes
          </Link>
        </div>
        <div>
          <Link to="/auth/login" className="text-black font-semibold mr-4">
            Login
          </Link>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="text-black font-semibold mr-4"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
