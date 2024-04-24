import React from "react";
import { useState } from "react";
const ConnectButton = () => {
  const [text, setText] = useState("Connect Wallet");
  const connectButton = () => {
    const connect = async () => {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setText("Connected!");
      } else {
        setText("Please install metamask");
      }
    };
    connect();
  };
  return (
    <button
      onClick={connectButton}
      id="connectButton"
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
    >
      {text}
    </button>
  );
};

export default ConnectButton;
