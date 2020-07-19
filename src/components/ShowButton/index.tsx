import React, { useCallback } from "react";
import { Button } from "../Button";

type IProps = {
  count: number;
  id: string;
  clickHandler: (id: string) => void;
};

const DICTIONARY = {
  SHOW: "Show",
};

export const ShowButton = (props: IProps) => {
  const { count, id, clickHandler } = props;

  const onClick = useCallback(() => clickHandler(id), [id, clickHandler]);

  return (
    <Button
      text={`${DICTIONARY.SHOW} (${count ? count : 0})`}
      clickHandler={onClick}
      disabled={count <= 0}
    />
  );
};
