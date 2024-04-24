import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigateTo = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const sendData = { email, password };

    try {
      // const user = await fetch("http://localhost:5858/auth/login", {
      //   method: "POST",
      //   //credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(sendData),
      // });
      const loginresponse = await axios.post(
        "http://localhost:5858/auth/login",
        sendData,
        { withCredentials: true }
      );

      const response = loginresponse;
      console.log(response);
      navigateTo("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-blue-100 flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl text-center mb-4">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
