import React from "react";

import "./FirstSection.scss";
import macBookImage from "../../assets/img/macbook.png";

import withBackground from "../../hoc/withBackground/withBackground";
import withPadding from "../../hoc/withPadding/withPadding";
import Header from "../Typography/Header/Header";
import Paragraph from "../Typography/Paragraph/Paragraph";
import Button from "../UI/Button/Button";
import Decoration from "../Decoration/Decoration";

const FirstSection = props => {
  return (
    <div className="c-first-section__container">
      <div className="c-first-section__info-container">
        <div className="c-first-section__header-wrapper">
          <Header mediaClass="c-first-section__header">Who we are</Header>
        </div>
        <div className="c-first-section__paragraph-wrapper">
          <Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
        </div>
        <Button primary id="second-section" scrollTo={props.scrollTo}>
          read more
        </Button>
      </div>

      <div className="c-first-section__image-container">
        <img className="c-first-section__image" src={macBookImage} alt="MacBook" />
      </div>
      <Decoration type="triangle" positionClass="c-first-section__decoration" />
    </div>
  );
};

const backgroundOptions = {
  newClass: "c-first-section__background",
  id: "first-section",
};

export default withBackground(withPadding(FirstSection, "c-first-section__padding"), backgroundOptions);
