import React, { Component, Fragment } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const plugins = [ScrollTrigger];

class ScrollTrig extends Component {
  componentDidMount() {
    this.toggleUpArrow();

    this.toggleMobileBurger();

    window.addEventListener("resize touchmove", () => {
      ScrollTrigger.refresh(true);
    });
  }

  toggleUpArrow() {
    gsap.to(".o-up-arrow__container", {
      scrollTrigger: {
        trigger: "#home",
        start: "10px top",
        end: "+=0",
        scrub: 1,
      },
      opacity: 1,
      display: "flex",
    });
  }

  toggleMobileBurger = () => {
    if (!isMobileScreen()) return;

    let animation;

    ScrollTrigger.batch("#home", {
      onLeave: () => {
        gsap.set(".c-navigation-wrapper", {
          backgroundColor: "#bc2e3a",
          display: "none",
        });
        gsap.set(".c-navigation__hamburger", {
          display: "block",
        });

        animation = gsap.to(".l-navigation-header", {
          position: "fixed",
          backgroundColor: "#bc2e3a",
          duration: 0.5,
        });
      },
      onEnterBack: () => {
        this.props.navigationChange();
        animation.kill();
        gsap.set(".c-navigation-wrapper", {
          backgroundColor: "transparent",
          display: "flex",
          opacity: 1,
        });
        gsap.set(".c-navigation__hamburger", {
          display: "none",
        });

        gsap.set(".l-navigation-header", {
          backgroundColor: "transparent",
          position: "absolute",
        });
      },
    });
  };

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

function isMobileScreen() {
  const mediaQueryList = window.matchMedia("(max-width: 750px)");
  return mediaQueryList.matches;
}

export default ScrollTrig;
