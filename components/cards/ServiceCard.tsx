import React from "react";

type Props = {
  name: string;
  description: string;
};

const ServiceCard = (props: Props) => {
  return (
    <div className="col-md-6">
      <div className="service-item">
        <div className="service-item-title slide-title-sub">{props.name}</div>
        <div className="service-item-descr slide-descr">
          {props.description}
        </div>
        <div className="service-item-more">
          <a href="#" className="btn btn-sm btn-circle btn-success">
            <i className="lni lni-plus"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
