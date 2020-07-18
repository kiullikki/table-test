import React from "react";

interface IProps {
  rotate: number;
  className: string;
}

export const Arrow = (props: IProps) => {
  const { rotate = 0, className } = props;

  return (
    <svg
      className={`${className}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        fill="#282d30"
        fillRule="evenodd"
        d="M11.25 3.75l-5.5 5.5-5.5-5.5z"
      />
    </svg>
  );
};
