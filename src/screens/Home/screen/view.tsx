import React from "react";
import { KeywordsTable } from "../../../components";
import "./style.scss";

interface IProps {
  keywordsList: string[];
  openModal: (id: string) => void;
}

export const HomePageView = (props: IProps) => {
  const { keywordsList, openModal } = props;

  return (
    <main className="home">
      <div className="container">
        <KeywordsTable keywordsList={keywordsList} openModal={openModal} />
      </div>
    </main>
  );
};
