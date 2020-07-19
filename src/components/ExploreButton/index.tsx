import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { ROUTES_PATHES } from "../../constants";

type IProps = {
  keyword: string;
};

const DICTIONARY = {
  EXPLORE: "Explore",
};

export const ExploreButton = (props: IProps) => {
  const { keyword } = props;
  const calcKeyword = keyword.replace(/\s/g, "");

  return (
    <Link to={`${ROUTES_PATHES.STATS}/${calcKeyword}`}>
      <Button text={DICTIONARY.EXPLORE} />
    </Link>
  );
};
