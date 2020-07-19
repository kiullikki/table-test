import React from "react";
import { withRouter } from "react-router-dom";
import { routes } from "./router";
import "./App.scss";

function App() {
  return <div className="app">{routes}</div>;
}

export default withRouter(App);
