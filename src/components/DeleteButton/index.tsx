import React, { useCallback } from "react";
import { Button } from "../Button";
import { Delete } from "../svg";
import { useDispatch } from "react-redux";
import { deleteKeyword } from "../../store";

type IProps = {
  id: string;
};

export const DeleteButton = (props: IProps) => {
  const { id } = props;

  const dispatch = useDispatch();
  const clickHandler = useCallback(() => dispatch(deleteKeyword(id)), [
    id,
    dispatch,
  ]);

  return (
    <Button clickHandler={clickHandler} className="button--transparent">
      <Delete />
    </Button>
  );
};
