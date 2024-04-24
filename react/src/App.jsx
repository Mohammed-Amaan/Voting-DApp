import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar";

import Home from "./pages/home";
import AdminPage from "./pages/adminPage";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import VoterPage from "./pages/voterPage";
import VotesPage from "./pages/votesPage";
import EnrollVoterPage from "./pages/enrollVoterPage";
import Test from "./pages/test";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/auth/signup" element={<SignupPage />}></Route>
        <Route path="/voter" element={<VoterPage />}></Route>
        <Route path="/votes" element={<VotesPage />}></Route>
        <Route path="/admin/enrollVoter" element={<EnrollVoterPage />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </>
  );
};

export default App;
