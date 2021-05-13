import React from "react";

import "./Footer.scss";

import Header from "../Typography/Header/Header";
import withBackground from "../../hoc/withBackground/withBackground";
import withPadding from "../../hoc/withPadding/withPadding";
import Paragraph from "../Typography/Paragraph/Paragraph";
import Decoration from "../Decoration/Decoration";

import messageIcon from "../../assets/img/message-icon2.png";
import phoneIcon from "../../assets/img/phone-icon.png";
import mapIcon from "../../assets/img/map-icon2.png";

const Footer = props => (
  <div className="c-footer__container">
    <div className="c-footer__header-wrapper">
      <Header color="#9F9F9F" position="center" mediaClass="c-footer__header">
        Get in touch
      </Header>
    </div>

    <div className="c-footer__contact-container">
      <div className="c-footer__contact-item">
        <img className="c-footer__contact-icon" src={messageIcon} alt="message icon" />
        <div className="c-footer__contact-info-wrapper">
          <p className="c-footer__contact-name">Email</p>
          <Paragraph color="white">
            free@psdfreebies.com
            <br />
            free@psdfreebies.com
          </Paragraph>
        </div>
      </div>
      <div className="c-footer__contact-item">
        <img className="c-footer__contact-icon c-footer__contact-icon--phone" src={phoneIcon} alt="phone icon" />
        <div className="c-footer__contact-info-wrapper">
          <p className="c-footer__contact-name">Phone</p>
          <Paragraph color="white">
            +123 456 7890
            <br />
            +123 456 7890
          </Paragraph>
        </div>
      </div>
      <div className="c-footer__contact-item">
        <img className="c-footer__contact-icon c-footer__contact-icon--map" src={mapIcon} alt="map icon" />
        <div className="c-footer__contact-info-wrapper">
          <p className="c-footer__contact-name">Office</p>
          <Paragraph color="white">
            123, Main Road, New City,
            <br /> My Country 123456
          </Paragraph>
        </div>
      </div>
    </div>

    <div className="c-footer__media-container">
      <span className="c-footer__media-icon fa fa-facebook"></span>
      <span className="c-footer__media-icon fa fa-google-plus"></span>
      <span className="c-footer__media-icon fa fa-vk"></span>
      <span className="c-footer__media-icon fa fa-youtube"></span>
      <span className="c-footer__media-icon fa fa-linkedin"></span>
      <span className="c-footer__media-icon fa fa-digg"></span>
    </div>

    <div className="c-footer__copyright">
      Copyright © 2017. PSDFreebies.com | Best PSD Template for freelancer and agencies
    </div>

    <Decoration type="square" positionClass="c-footer__decoration" />
  </div>
);

const backgroundOptions = {
  newClass: "c-footer__background",
  id: "footer-section",
};

export default withBackground(withPadding(Footer, "c-footer__padding"), backgroundOptions);
