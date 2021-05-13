import React, { Component, createRef } from "react";
import { TweenLite } from "gsap";

import sliderImage1 from "../../assets/img/slider_image1.png";
import sliderImage2 from "../../assets/img/slider_image2.png";
import sliderImage3 from "../../assets/img/slider_image3.png";

import "./Slider.scss";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.sliderList = createRef();

    this.isAnimating = false;

    this.state = {
      direction: null,
      teamMembers: [
        {
          name: "John Doe",
          title: "Programmer",
          img: sliderImage1,
          active: false,
        },

        {
          name: "Jimmy Doe",
          title: "Designer",
          img: sliderImage2,
          active: true,
        },

        {
          name: "Janet Doe",
          title: "Programmer",
          img: sliderImage3,
          active: false,
        },
      ],
    };
  }

  componentDidMount() {
    this.toBig(this.sliderList.children[1], 0);
  }

  componentDidUpdate() {
    if (this.state.direction === "left") {
      this.toNormal(this.sliderList.children[0], 1);
      this.toTransparent(this.sliderList.children[0], 1);
      this.fromRight(this.sliderList.children[0], 1, "100%");

      this.toBig(this.sliderList.children[1], 1);
      this.toVisible(this.sliderList.children[1], 1);
      this.fromRight(this.sliderList.children[1], 1, "105%");

      this.toRight(this.sliderList.children[2], 0, "-220%");
      this.toInvisible(this.sliderList.children[2], 0.3);
      this.toRight(this.sliderList.children[2], 0.5, "-300%");
      this.toRight(this.sliderList.children[2], 0, 250, 0.5);
      this.toTransparent(this.sliderList.children[2], 0.5, 0.5);
      this.toRight(this.sliderList.children[2], 0.5, 0, 0.5);

      this.onComplete(this.sliderList.children[2], 1);
    } else if (this.state.direction === "right") {
      this.toNormal(this.sliderList.children[2], 1);
      this.toTransparent(this.sliderList.children[2], 1);
      this.fromRight(this.sliderList.children[2], 1, "-100%");

      this.toBig(this.sliderList.children[1], 1);
      this.toVisible(this.sliderList.children[1], 1);
      this.fromRight(this.sliderList.children[1], 1, "-105%");

      this.toRight(this.sliderList.children[0], 0, "220%");
      this.toInvisible(this.sliderList.children[0], 0.3);
      this.toRight(this.sliderList.children[0], 0.5, "300%");
      this.toRight(this.sliderList.children[0], 0, -250, 0.5);
      this.toTransparent(this.sliderList.children[0], 0.5, 0.5);
      this.toRight(this.sliderList.children[0], 0.5, 0, 0.5);

      this.onComplete(this.sliderList.children[0], 1);
    }
  }

  onComplete(element, delay) {
    TweenLite.to(element, 0, {
      onComplete: () => {
        this.isAnimating = false;
      },
      delay,
    });
  }

  toBig(element, duration) {
    TweenLite.to(element, duration, {
      scale: 1.25,
    });
  }

  toNormal(element, duration) {
    TweenLite.to(element, duration, {
      scale: 1,
    });
  }

  fromRight(element, duration, distance, delay = 0) {
    TweenLite.from(element, duration, {
      x: distance,
      delay,
    });
  }

  toRight(element, duration, distance, delay = 0) {
    TweenLite.to(element, duration, {
      x: distance,
      delay,
    });
  }

  toVisible(element, duration) {
    TweenLite.to(element, duration, {
      opacity: 1,
    });
  }

  toTransparent(element, duration, delay = 0) {
    TweenLite.to(element, duration, {
      opacity: 0.6,
      delay,
    });
  }

  toInvisible(element, duration) {
    TweenLite.to(element, duration, {
      opacity: 0,
    });
  }

  slideLeft = () => {
    if (this.isAnimating) return;
    this.setState(prevState => {
      this.isAnimating = true;
      let newTeamMembers = [...[...prevState.teamMembers].slice(1), [...prevState.teamMembers].shift()];
      newTeamMembers[0].active = false;
      newTeamMembers[1].active = true;

      return {
        direction: "left",
        teamMembers: newTeamMembers,
      };
    });
  };

  slideRight = () => {
    if (this.isAnimating) return;
    this.setState(prevState => {
      this.isAnimating = true;
      let newTeamMembers = [[...prevState.teamMembers].pop(), ...[...prevState.teamMembers].slice(0, 2)];
      newTeamMembers[1].active = true;
      newTeamMembers[2].active = false;

      return {
        direction: "right",
        teamMembers: newTeamMembers,
      };
    });
  };

  render() {
    return (
      <div className="o-slider">
        <div className="o-slider__arrow-container" onClick={this.slideRight}>
          <div className="o-slider__arrow o-slider__arrow--left"></div>
        </div>

        <div className="o-slider__content">
          <ul ref={el => (this.sliderList = el)} className="o-slider__content-list">
            {this.state.teamMembers.map(member => {
              return (
                <li key={member.name} className={returnClassName(member.active, "o-slider__content-item")}>
                  <div className={returnClassName(member.active, "o-slider__image-wrapper")}>
                    <img
                      className={returnClassName(member.active, "o-slider__image")}
                      src={member.img}
                      alt={member.name}
                    />
                  </div>
                  <div className={returnClassName(member.active, "o-slider__content-name")}>{member.name}</div>
                  <div className={returnClassName(member.active, "o-slider__content-title")}>{member.title}</div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="o-slider__arrow-container" onClick={this.slideLeft}>
          <div className="o-slider__arrow o-slider__arrow--right"></div>
        </div>
      </div>
    );
  }
}

const returnClassName = (isActive, classString) => {
  return isActive ? `${classString} ${classString}--active` : `${classString}`;
};

export default Slider;
