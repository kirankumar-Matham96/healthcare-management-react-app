import React from "react";

export const Button = (props) => {
  return <button className={props.class}>{props.children}</button>;
};
