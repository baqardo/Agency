import React from "react";

import "./ThirdSection.scss";

import Header from "../Typography/Header/Header";
import withBackground from "../../hoc/withBackground/withBackground";
import withPadding from "../../hoc/withPadding/withPadding";
import Paragraph from "../Typography/Paragraph/Paragraph";
import Button from "../UI/Button/Button";
import Decoration from "../Decoration/Decoration";

const ThirdSection = props => (
  <div className="c-third-section__container">
    <div className="c-third-section__header-wrapper">
      <Header mediaClass="c-third-section__header">How we works</Header>
    </div>

    <div className="c-third-section__content">
      <div className="c-third-section__cta">
        <div className="c-third-section__cta-text">
          <Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </Paragraph>
        </div>
        <Button primary id="fourth-section" scrollTo={props.scrollTo}>
          read more
        </Button>
      </div>

      <div className="c-third-section__steps">
        <div className="c-third-section__steps-item c-third-section__steps-item--first">
          <div className="c-third-section__steps-info">
            <div className="c-third-section__steps-title">idea</div>
            <div className="c-third-section__steps-text">
              <Paragraph color="white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Paragraph>
            </div>
          </div>
          <div className="c-third-section__steps-number">1.</div>
        </div>

        <div className="c-third-section__steps-item c-third-section__steps-item--second">
          <div className="c-third-section__steps-info">
            <div className="c-third-section__steps-title">design</div>
          </div>
          <div className="c-third-section__steps-number">2.</div>
        </div>

        <div className="c-third-section__steps-item c-third-section__steps-item--third">
          <div className="c-third-section__steps-info">
            <div className="c-third-section__steps-title">output</div>
          </div>
        </div>
      </div>
    </div>
    <Decoration type="triangle" size="small" positionClass="c-third-section__decoration-triangle" />
    <Decoration type="square" positionClass="c-third-section__decoration-square" />
  </div>
);

const backgroundOptions = {
  newClass: "c-third-section__background",
  id: "third-section",
};

export default withBackground(withPadding(ThirdSection, "c-third-section__padding"), backgroundOptions);
