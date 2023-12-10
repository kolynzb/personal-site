/* eslint-disable @next/next/no-img-element */
import { ITestimonial } from "@lib/sanity.interface";
import React from "react";

type Props = {
  testimonial: ITestimonial;
};

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="testimonials-item">
      <div className="testimonials-item-avatar-container">
        <div className="testimonial-item-avatar avatar">
          {/* TODO: Figure image */}
          <div
            className="inside"
            style={{ backgroundImage: `url(img/pic4.jpg)` }}
          ></div>
        </div>
        <div className="testimonial-item-company clients-photo-item">
          <div className="inside">
            <img src="img/pic-client-8.png" alt="" />
          </div>
        </div>
      </div>
      <div className="testimonials-item-text slide-title-info">
        “{testimonial.testimonial}”
      </div>
      <div className="testimonials-item-rating">
        <i className="lni lni-star-filled"></i>
        <i className="lni lni-star-filled"></i>
        <i className="lni lni-star-filled"></i>
        <i className="lni lni-star-filled"></i>
        <i className="lni lni-star-filled"></i>
      </div>
      <div className="testimonials-item-author">{testimonial.name}</div>
      <div className="testimonials-item-author-status slide-descr">
        {testimonial.role} at
        <a href="#" className="text-primary text-underline">
          @{testimonial.company.name}
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
