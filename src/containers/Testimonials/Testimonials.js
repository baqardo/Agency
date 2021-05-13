import React, { Component } from "react";

import "./Testimonials.scss";

import Paragraph from "../../components/Typography/Paragraph/Paragraph";

import testimonialsImage1 from "../../assets/img/testimonials_image1.png";
import testimonialsImage2 from "../../assets/img/testimonials_image2.png";
import testimonialsImage3 from "../../assets/img/testimonials_image3.png";

import smallImage1 from "../../assets/img/small-image1.png";
import smallImage2 from "../../assets/img/small-image2.png";
import smallImage3 from "../../assets/img/small-image3.png";

import { TweenLite } from "gsap";

const testimonials = [
  {
    name: "Jimmy Doe",
    title: "Designer",
    opinion:
      "Sed ut sit voluptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

    img: testimonialsImage1,
    smallImg: smallImage1,
  },
  {
    name: "John Doe",
    title: "Programmer",
    opinion:
      "Sed ut perspiciatis unde omnis accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

    img: testimonialsImage2,
    smallImg: smallImage2,
  },

  {
    name: "Janet Doe",
    title: "Programmer",
    opinion:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

    img: testimonialsImage3,
    smallImg: smallImage3,
  },
];

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.isAnimating = false;

    this.state = {
      prevTestimonialIndex: null,
      currentTestimonialIndex: 2,
    };
  }

  componentDidUpdate() {
    this.isAnimating = true;

    TweenLite.set([".o-testimonials__image-wrapper--current", ".o-testimonials__text--current"], {
      opacity: 0,
    });
    TweenLite.set([".o-testimonials__image-wrapper--prev", ".o-testimonials__text--prev"], {
      opacity: 1,
    });
    TweenLite.to([".o-testimonials__image-wrapper--prev", ".o-testimonials__text--prev"], 0.4, {
      opacity: 0,
    });
    TweenLite.to([".o-testimonials__image-wrapper--current", ".o-testimonials__text--current"], 0.5, {
      opacity: 1,
      delay: 0.4,
      onComplete: () => {
        this.isAnimating = false;
      },
    });
  }

  changeTestimonial = testimonialIndex => {
    if (this.isAnimating) return;

    this.setState(prevState => {
      return { prevTestimonialIndex: prevState.currentTestimonialIndex, currentTestimonialIndex: testimonialIndex };
    });
  };

  render() {
    return (
      <div className="o-testimonials__container">
        <div className="o-testimonials__image-grid">
          <div className="o-testimonials__image-wrapper o-testimonials__image-wrapper--current">
            <img
              className="o-testimonials__image"
              src={testimonials[this.state.currentTestimonialIndex].img}
              alt="testimonials"
            />
          </div>
          {this.state.prevTestimonialIndex !== null && (
            <div className="o-testimonials__image-wrapper o-testimonials__image-wrapper--prev">
              <img
                className="o-testimonials__image"
                src={testimonials[this.state.prevTestimonialIndex].img}
                alt="testimonials"
              />
            </div>
          )}
        </div>

        <div className="o-testimonials__content">
          <div className="o-testimonials__content-wrapper">
            <div className="o-testimonials__text-grid">
              <div className="o-testimonials__text o-testimonials__text--current">
                <Paragraph type="italic">{testimonials[this.state.currentTestimonialIndex].opinion}</Paragraph>
                <p className="o-testimonials__name">
                  {testimonials[this.state.currentTestimonialIndex].name},{" "}
                  {testimonials[this.state.currentTestimonialIndex].title}
                </p>
              </div>

              {this.state.prevTestimonialIndex !== null && (
                <div className="o-testimonials__text o-testimonials__text--prev">
                  <Paragraph type="italic">{testimonials[this.state.prevTestimonialIndex].opinion}</Paragraph>
                  <p className="o-testimonials__name">
                    {testimonials[this.state.prevTestimonialIndex].name},{" "}
                    {testimonials[this.state.prevTestimonialIndex].title}
                  </p>
                </div>
              )}
            </div>

            <div className="o-testimonials__people">
              {testimonials.map((testimonial, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index === this.state.currentTestimonialIndex
                        ? "o-testimonials__people-icon-wrapper o-testimonials__people-icon-wrapper--active"
                        : "o-testimonials__people-icon-wrapper"
                    }>
                    <img
                      className="o-testimonials__people-icon"
                      src={testimonial.smallImg}
                      alt="testimonials"
                      onClick={() => this.changeTestimonial(index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
