import React from "react";

import "./UpArrow.scss";

const UpArrow = props => (
  <div className="o-up-arrow__container" onClick={() => props.scrollTo("#home")}>
    <div className="o-up-arrow__icon fa fa-arrow-up"></div>
  </div>
);

export default UpArrow;
