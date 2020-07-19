import React, { ReactNode } from "react";

type IProps = {
  children?: ReactNode;
  text?: string;
  clickHandler?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button = (props: IProps) => {
  const {
    text,
    clickHandler,
    disabled = false,
    children = null,
    className = "",
  } = props;
  return (
    <button
      type="button"
      className={`button ${className}`}
      onClick={clickHandler && clickHandler}
      disabled={disabled}
    >
      {!!text && <span>{text}</span>}
      {children}
    </button>
  );
};
