import React from "react";

import "./Header.scss";

const Header = props => {
  const { position, mediaClass } = props;

  let className = "o-typography-header ";

  className += position === "center" ? "o-typography-header--center" : "";

  className += mediaClass ? ` ${mediaClass}` : "";

  return (
    <h1 className={className} style={{ color: props.color }}>
      {props.children}
    </h1>
  );
};

export default Header;
