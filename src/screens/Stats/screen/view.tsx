import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";

export const DICTIONARY = {
  KEYWORDS: "Keywords",
};

export const StatsPageView = () => {
  let { keyword } = useParams();
  return (
    <main className="stats">
      <div className="container">
        <h1>
          <span>{`${DICTIONARY.KEYWORDS}: `}</span>
          <span className="stats__keywords">{keyword}</span>
        </h1>
      </div>
    </main>
  );
};
