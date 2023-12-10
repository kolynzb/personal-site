import React from "react";
import { IAward } from "@lib/sanity.interface";
import AwardSlide from "@components/slides/AwardSlide";

type Props = {
  awards: IAward[];
};

const AwardsSect: React.FC<Props> = ({ awards }) => {
  return (
    <div className="section pp-scrollable slide-dark-footer slide-personal-awards">
      <div className="slide-container">
        <div className="slide-bg">
          <div className="slide-photo circle-green slide-awards-circle1 transformLeft"></div>
          <div className="slide-photo circle-brown slide-awards-circle2 transformRight"></div>
        </div>
        <div className="container">
          <div className="slide-num">4</div>
          <div className="row align-items-center animate-element delay5 fadeInDown">
            <div className="col-md-7">
              <h2 className="slide-title mb-5 mb-md-0">awards</h2>
            </div>
            <div className="col-md-5">
              <h3 className="slide-title-info mb-5 mb-md-0">
                Professional awards I’ve reached during
                <span className="text-primary">my working times.</span>
              </h3>
            </div>
          </div>
          <div className="row award-list animate-element delay5 fadeInUp">
            {awards.map((award) => (
              <AwardSlide award={award} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSect;
