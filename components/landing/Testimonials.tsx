import TestimonialCard from "@components/cards/TestimonialCard";
import { ITestimonial } from "@lib/sanity.interface";
import React from "react";

type Props = { testimonials: ITestimonial[] };

const Testimonials: React.FC<Props> = ({ testimonials }) => {
  return (
    <div className="section pp-scrollable slide-dark slide-personal-testimonials">
      <div className="slide-container">
        <div className="slide-bg">
          <div className="slide-photo circle-golden slide-testimonials-circle3 animate-element delay5 fadeInUp"></div>
        </div>
        <div className="container">
          <div className="slide-num">7</div>
          <div className="row">
            <div className="col-md-5 col-sm-10 mb-4">
              <div className="video-link">
                <a
                  href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  data-fancybox
                  className="inside animate-element delay6 fadeIn"
                  style={{ backgroundImage: "url(img/pic5.jpg)" }}
                >
                  <div className="center-icon">
                    <i className="lni lni-play"></i>
                  </div>
                </a>
                <div className="slide-photo circle-green slide-testimonials-circle1 transformLeft"></div>
                <div className="slide-photo circle-brown slide-testimonials-circle2 transformRight"></div>
              </div>
              <div className="video-link-descr slide-descr">
                *Sanfasio Agency’s Stories
              </div>
            </div>
            <div className="col-md-1 col-xl-2 d-none d-lg-block"></div>
            <div className="col-xl-5 col-lg-6 col-md-7">
              <div className="carousel-testimonial a-carousel-testimonial owl-carousel owl-theme animate-element delay5 fadeInDown">
                {testimonials.map((testimonial) => (
                  <TestimonialCard testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
