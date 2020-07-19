import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomePageView } from "./view";
import { KeywordsModal } from "../../../components/KeywordsModal";
import { fetchKeywords, selectKeywordsList } from "../../../store";

export const HomePageController = () => {
  const dispatch = useDispatch();

  const keywordsList = useSelector(selectKeywordsList);

  const [isSuggestionsCountOpen, setSuggestionsCountOpen] = useState(false);

  const [currentKeywordId, setCurrentKeywordId] = useState("");

  const openModal = useCallback((id) => {
    console.log("id", id);
    setSuggestionsCountOpen(true);
    setCurrentKeywordId(id);
  }, []);

  const closeModal = useCallback(() => {
    setSuggestionsCountOpen(false);
    setCurrentKeywordId("");
  }, []);

  useEffect(() => {
    dispatch(fetchKeywords());
  }, [dispatch]);

  return (
    <>
      <HomePageView keywordsList={keywordsList} openModal={openModal} />
      {isSuggestionsCountOpen && (
        <KeywordsModal id={currentKeywordId} close={closeModal} />
      )}
    </>
  );
};
