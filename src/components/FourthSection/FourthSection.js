import React from "react";

import "./FourthSection.scss";
import Header from "../Typography/Header/Header";
import withBackground from "../../hoc/withBackground/withBackground";
import withPadding from "../../hoc/withPadding/withPadding";

import Slider from "../../containers/Slider/Slider";

const FourthSection = props => (
  <div className="c-fourth-section__container">
    <div className="c-fourth-section__header-wrapper">
      <Header position="center" mediaClass="c-fourth-section__header">
        Our creative team
      </Header>
    </div>

    <Slider />
  </div>
);

const backgroundOptions = {
  newClass: "c-fourth-section__background",
  id: "fourth-section",
};

export default withBackground(withPadding(FourthSection, "c-fourth-section__padding"), backgroundOptions);
