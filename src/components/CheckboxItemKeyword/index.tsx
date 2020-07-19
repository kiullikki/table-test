import React, { ReactElement, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "../Checkbox";
import { selectKeywordChecked, checkKeyword } from "../../store";
import { IStore } from "../../store/types";

type IProps = {
  id: string;
};

export const CheckboxItemKeyword = (props: IProps): ReactElement => {
  const { id } = props;
  const dispatch = useDispatch();
  const checked = useSelector((store: IStore) =>
    selectKeywordChecked(store, id)
  );
  const handleChange = useCallback(() => dispatch(checkKeyword(id)), [
    id,
    dispatch,
  ]);

  return <Checkbox id={id} checked={checked} handleChange={handleChange} />;
};
