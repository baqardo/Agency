import React, { Component } from "react";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import MainBanner from "./components/MainBanner/MainBanner";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import FifthSection from "./components/FifthSection/FifthSection";
import Footer from "./components/Footer/Footer";
import UpArrow from "./components/UI/UpArrow/UpArrow";
import ScrollTrig from "./hoc/ScrollTrig/ScrollTrig";

import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
const plugins = [ScrollToPlugin];

class App extends Component {
  isNavigationShow = false;

  scrollTo(id) {
    gsap.to(window, { duration: 1, scrollTo: id });
  }

  changeNavigationStatusToFalse = () => {
    this.isNavigationShow = false;
  };

  hideNavigation = () => {
    if (!this.isNavigationShow) return;

    gsap.to(".c-navigation-wrapper", {
      opacity: 0,
      y: "-100%",
      display: "none",

      duration: 0.5,
    });
    gsap.set(".c-navigation-wrapper", {
      padding: 0,
      y: 0,
      position: "initial",
      delay: 0.5,
    });
    this.isNavigationShow = false;
  };

  showNavigation = () => {
    if (this.isNavigationShow) return;

    gsap.set(".c-navigation-wrapper", {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      paddingBottom: "1rem",
      marginTop: "1rem",
      left: 0,
    });
    gsap.to(".c-navigation-wrapper", {
      opacity: 1,

      display: "flex",
      position: "absolute",

      duration: 0.5,
    });
    gsap.from(".c-navigation-wrapper", {
      y: "-100%",
      duration: 0.5,
    });

    this.isNavigationShow = true;
  };

  toggleNavigation = () => {
    if (!this.isNavigationShow) {
      this.showNavigation();
    } else {
      this.hideNavigation();
    }
  };

  render() {
    return (
      <div className="app">
        <ScrollTrig navigationChange={this.changeNavigationStatusToFalse}>
          <Navigation
            scrollTo={this.scrollTo}
            toggleNavigation={this.toggleNavigation}
            hideNavigation={this.hideNavigation}
          />
          <MainBanner scrollTo={this.scrollTo} />
          <FirstSection scrollTo={this.scrollTo} />
          <SecondSection />
          <ThirdSection scrollTo={this.scrollTo} />
          <FourthSection />
          <FifthSection />
          <Footer />
          <UpArrow scrollTo={this.scrollTo} />
        </ScrollTrig>
      </div>
    );
  }
}

export default App;
