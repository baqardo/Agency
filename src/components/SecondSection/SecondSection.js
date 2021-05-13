import React from "react";

import "./SecondSection.scss";

import withBackground from "../../hoc/withBackground/withBackground";
import withPadding from "../../hoc/withPadding/withPadding";
import Header from "../Typography/Header/Header";
import Paragraph from "../Typography/Paragraph/Paragraph";
import Decoration from "../Decoration/Decoration";

import flagIcon from "../../assets/img/flag-icon.png";
import computerIcon from "../../assets/img/computer-icon.png";
import chartIcon from "../../assets/img/chart-icon.png";
import helpIcon from "../../assets/img/help-icon.png";
import mapIcon from "../../assets/img/map-icon.png";
import messageIcon from "../../assets/img/message-icon.png";

const FirstSection = props => {
  return (
    <div className="c-second-section__container">
      <div className="c-second-section__header-wrapper">
        <Header position="center" mediaClass="c-second-section__header">
          What we do
        </Header>
      </div>

      <div className="c-second-section__info-container">
        <div className="c-second-section__info-item">
          <div className="c-second-section__info-icon-container">
            <img className="c-section__info-icon" src={flagIcon} alt="icon" />
          </div>
          <div className="c-second-section__info-wrapper">
            <div className="c-second-section__info-title">Creative Work</div>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Paragraph>
          </div>
        </div>

        <div className="c-second-section__info-item">
          <div className="c-second-section__info-icon-container">
            <img className="c-section__info-icon" src={computerIcon} alt="icon" />
          </div>
          <div className="c-second-section__info-wrapper">
            <div className="c-second-section__info-title">We do Best</div>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Paragraph>
          </div>
        </div>

        <div className="c-second-section__info-item">
          <div className="c-second-section__info-icon-container">
            <img className="c-section__info-icon" src={chartIcon} alt="icon" />
          </div>
          <div className="c-second-section__info-wrapper">
            <div className="c-second-section__info-title">Best Company</div>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Paragraph>
          </div>
        </div>

        <div className="c-second-section__info-item">
          <div className="c-second-section__info-icon-container">
            <img className="c-section__info-icon" src={helpIcon} alt="icon" />
          </div>
          <div className="c-second-section__info-wrapper">
            <div className="c-second-section__info-title">Nice Idea</div>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Paragraph>
          </div>
        </div>

        <div className="c-second-section__info-item">
          <div className="c-second-section__info-icon-container">
            <img className="c-section__info-icon" src={mapIcon} alt="icon" />
          </div>
          <div className="c-second-section__info-wrapper">
            <div className="c-second-section__info-title">Professional</div>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Paragraph>
          </div>
        </div>

        <div className="c-second-section__info-item">
          <div className="c-second-section__info-icon-container">
            <img className="c-section__info-icon" src={messageIcon} alt="icon" />
          </div>
          <div className="c-second-section__info-wrapper">
            <div className="c-second-section__info-title">Great Services</div>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Paragraph>
          </div>
        </div>
      </div>

      <Decoration type="square" size="small" positionClass="c-second-section__decoration" />
    </div>
  );
};

const backgroundOptions = {
  newClass: "c-second-section__background",
  id: "second-section",
};

export default withBackground(withPadding(FirstSection, "c-second-section__padding"), backgroundOptions);
