import React from "react";

export const NextArrow = (props) => {
  //props: classnames, inline styles and onClick stuff
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};
export const PrevArrow = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick}
      />
    </>
  );
};
