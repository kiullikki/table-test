import React, { useCallback } from "react";
import { Button } from "../Button";

type IProps = {
  count: number;
  id: string;
};

const DICTIONARY = {
  SHOW: "Show",
};

export const ShowButtonController = (props: IProps) => {
  const { count, id } = props;
  const clickHandler = useCallback(() => console.log("explore", id), [id]);

  return (
    <Button
      text={`${DICTIONARY.SHOW} (${count ? count : 0})`}
      clickHandler={clickHandler}
      disabled={count <= 0}
    />
  );
};
