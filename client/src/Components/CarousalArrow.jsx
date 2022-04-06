import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#c4c2c2", borderRadius:'14px'}}
      onClick={props.onClick}
    />
  );
};
export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "#c4c2c2", borderRadius:'14px'}}
      onClick={props.onClick}
    />
  );
};
