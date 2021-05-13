import React from "react";

import withPadding from "../../hoc/withPadding/withPadding";
import withBackground from "../../hoc/withBackground/withBackground";

import Header from "../Typography/Header/Header";
import Decoration from "../Decoration/Decoration";

import "./FifthSection.scss";
import Testimonials from "../../containers/Testimonials/Testimonials";

const FifthSection = props => (
  <div className="c-fifth-section__container">
    <div className="c-fifth-section__header-wrapper">
      <Header mediaClass="c-fifth-section__header">What client says</Header>
    </div>

    <Testimonials />

    <Decoration type="square" positionClass="c-fifth-section__decoration--square" />
    <Decoration type="triangle" positionClass="c-fifth-section__decoration--triangle" />
  </div>
);

const backgroundOptions = {
  newClass: "c-fifth-section__background",
  id: "fifth-section",
};

export default withBackground(withPadding(FifthSection, "c-fifth-section__padding"), backgroundOptions);
