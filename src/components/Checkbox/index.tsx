import React, { ReactElement } from "react";

type IProps = {
  id: string;
  checked: boolean;
  handleChange: () => void;
};

export const Checkbox = (props: IProps): ReactElement => {
  const { id, checked, handleChange } = props;

  return (
    <label htmlFor={id} className="checkbox">
      <input
        id={id}
        className="checkbox__input"
        name={id}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <span className="checkbox__custom" />
    </label>
  );
};
