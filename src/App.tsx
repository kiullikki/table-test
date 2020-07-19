import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./router";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
