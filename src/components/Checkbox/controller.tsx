import React, { ReactElement, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckboxView } from "./view";
import { selectKeywordChecked, checkKeyword } from "../../store";
import { IStore } from "../../store/types";

type IProps = {
  id: string;
};

export const CheckboxController = (props: IProps): ReactElement => {
  const { id } = props;
  const dispatch = useDispatch();
  const checked = useSelector((store: IStore) =>
    selectKeywordChecked(store, id)
  );
  const handleChange = useCallback(() => dispatch(checkKeyword(id)), [
    id,
    dispatch,
  ]);

  return <CheckboxView id={id} checked={checked} handleChange={handleChange} />;
};
