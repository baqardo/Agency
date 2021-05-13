import React from "react";
import "./MainBanner.scss";

import Button from "../UI/Button/Button";

const MainBanner = props => (
  <div className="main-header__wrapper" id="home">
    <div className="main-header">
      <div className="main-header__content">
        <div className="main-header__text-wrapper">
          <div className="main-header__text-inner main-header__text-inner--model">
            <p className="main-header__text main-header__text--behind">think</p>
            <p className="main-header__text main-header__text--behind">outside</p>
            <p className="main-header__text main-header__text--behind main-header__text--small">of the box</p>
          </div>
          <div className="main-header__text-inner main-header__text-inner--shadow">
            <p className="main-header__text">think</p>
            <p className="main-header__text">outside</p>
            <p className="main-header__text main-header__text--small">of the box</p>
          </div>
        </div>
        <div className="main-header__button-wrapper">
          <Button id="first-section" scrollTo={props.scrollTo} banner>
            read more
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default MainBanner;
