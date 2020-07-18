import React from "react";
import { DICTIONARY } from "./constants";
import "./style.scss";

interface IProps {}

export const HomePageView = (props: IProps) => {

  return (
    <main className="home">
      <div className="container">
        <h1>{DICTIONARY.COLOR}</h1>
      </div>
    </main>
  );
};
