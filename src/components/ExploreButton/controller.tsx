import React, { useCallback } from "react";
import { Button } from "../Button";

type IProps = {
  keyword: string;
};

const DICTIONARY = {
  EXPLORE: "Explore",
};

export const ExploreButtonController = (props: IProps) => {
  const { keyword } = props;
  const clickHandler = useCallback(() => console.log("explore", keyword), [
    keyword,
  ]);

  return <Button text={DICTIONARY.EXPLORE} clickHandler={clickHandler} />;
};
