import React from "react";
import "./Input.css";

export const Input = (props) => {
  const { size = "md", ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
};
