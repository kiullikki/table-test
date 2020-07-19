import React from "react";
import { KeywordsTable } from "../../../components";
import "./style.scss";

interface IProps {
  keywordsList: string[];
}

export const HomePageView = (props: IProps) => {
  const { keywordsList } = props;

  return (
    <main className="home">
      <div className="container">
        <KeywordsTable keywordsList={keywordsList} />
      </div>
    </main>
  );
};
