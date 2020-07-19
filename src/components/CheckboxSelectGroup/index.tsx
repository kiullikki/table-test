import React, { ReactElement, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "../Checkbox";
import { selectCheckAll, checkAllKeywords } from "../../store";

export const CheckboxSelectGroup = (): ReactElement => {
  const dispatch = useDispatch();

  const checked = useSelector(selectCheckAll);

  const handleChange = useCallback(() => dispatch(checkAllKeywords()), [
    dispatch,
  ]);

  return <Checkbox id={"all"} checked={checked} handleChange={handleChange} />;
};
