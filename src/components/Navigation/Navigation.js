import React from "react";

import "./Navigation.scss";

const Navigation = props => (
  <header className="l-navigation-header">
    <div className="c-navigation__hamburger" onClick={props.toggleNavigation}>
      <div className="c-navigation__hamburger-line"></div>
      <div className="c-navigation__hamburger-line"></div>
      <div className="c-navigation__hamburger-line"></div>
    </div>

    <nav className="c-navigation-wrapper">
      <a href="#home" className="c-navigation__logo-wrapper">
        <p className="c-navigation__logo">Agency</p>
      </a>

      <div className="c-navigation__link-wrapper">
        <div
          className="c-navigation__link"
          onClick={event => {
            props.scrollTo("#first-section");
            props.hideNavigation();
          }}>
          <p className="c-navigation__link-text">about us</p>
        </div>
        <div
          className="c-navigation__link"
          onClick={event => {
            props.scrollTo("#second-section");
            props.hideNavigation();
          }}>
          <p className="c-navigation__link-text">services</p>
        </div>
        <div
          className="c-navigation__link"
          onClick={event => {
            props.scrollTo("#third-section");
            props.hideNavigation();
          }}>
          <p className="c-navigation__link-text">process</p>
        </div>
        <div
          className="c-navigation__link"
          onClick={event => {
            props.scrollTo("#fourth-section");
            props.hideNavigation();
          }}>
          <p className="c-navigation__link-text">team</p>
        </div>
        <div
          className="c-navigation__link"
          onClick={event => {
            props.scrollTo("#fifth-section");
            props.hideNavigation();
          }}>
          <p className="c-navigation__link-text">clients</p>
        </div>
        <div
          className="c-navigation__link"
          onClick={event => {
            props.scrollTo("#footer-section");
            props.hideNavigation();
          }}>
          <p className="c-navigation__link-text">contact</p>
        </div>
      </div>

      <div className="c-navigation__icon-wrapper">
        <span className="c-navigation__icon fas fa fa-search icon-large"></span>
        <span className="c-navigation__icon fas fa fa-facebook icon-large"></span>
      </div>
    </nav>
  </header>
);

export default Navigation;
