import React from "react";

import "./Button.scss";

const Button = props => {
  let className = "o-button ";
  className += props.primary ? "o-button--primary" : "";
  className += props.banner ? "o-button--banner" : "";

  return (
    <button className={className} onClick={() => props.scrollTo("#" + props.id)}>
      {props.children}
    </button>
  );
};

export default Button;
