import React from "react";

import "./Paragraph.scss";

const Paragraph = props => (
  <p
    className={
      props.type === "italic" ? "o-typography-paragraph o-typography-paragraph--italic" : "o-typography-paragraph"
    }
    style={{ color: props.color }}>
    {props.children}
  </p>
);

export default Paragraph;
