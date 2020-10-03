import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Keyboard />
    </div>
  );
}

export default App;
