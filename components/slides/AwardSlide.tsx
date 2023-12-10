import { IAward } from "@lib/sanity.interface";
import React from "react";
import { dateToMonthYearFormat } from "@utils/datetime";

type Props = {
  award: IAward;
};

const AwardSlide: React.FC<Props> = ({ award }) => {
  return (
    <div className="col-lg-4">
      <div className="award-item">
        <div className="award-item-date">
          {dateToMonthYearFormat(award.date)}
        </div>
        {/* TODO: WHATS THIS LOGO */}
        <div className="award-item-logo">
          <img src="img/pic1.png" alt="" />
        </div>
        <div className="award-item-title slide-title-sub">{award.title}</div>
        <div className="award-item-descr slide-descr">{award.description}</div>
        <div className="award-item-more">
          <a href={award.url} className="text-success">
            See Award
          </a>
        </div>
      </div>
    </div>
  );
};

export default AwardSlide;
