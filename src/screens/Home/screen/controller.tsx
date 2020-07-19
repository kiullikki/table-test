import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomePageView } from "./view";
import { fetchKeywords, selectKeywordsList } from "../../../store";

export const HomePageController = () => {
  const dispatch = useDispatch();
  const keywordsList = useSelector(selectKeywordsList);

  useEffect(() => {
    dispatch(fetchKeywords());
  }, [dispatch]);

  return <HomePageView keywordsList={keywordsList} />;
};
