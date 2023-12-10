import React from "react";
import siteSettings from "@config/site.json";
import ServiceCard from "@components/cards/ServiceCard";
import { IService } from "@interfaces/portfolio.interface";

type Props = {
  services: IService[]
};


const ServicesSect = (props: Props) => {
  return (
    <div className="section pp-scrollable slide-personal-services">
      <div className="slide-container">
        <div className="slide-bg">
          <div className="slide-photo circle-light slide-services-circle2 transformLeft"></div>
          <div className="slide-photo circle-brown slide-services-circle1 transformRight"></div>
        </div>
        <div className="container">
          <div className="slide-num">2</div>
          <div className="row">
            <div className="col-md-4">
              <div className="animate-element delay5 fadeInDown">
                <h2 className="slide-title slide-title-personal-services slide-title-lg">
                  {(new Date().getFullYear() - siteSettings.yearStarted)
                    .toString()
                    .padStart(2, "0")}
                </h2>
                <div className="d-md-none">
                  <div className="slide-title-sub slide-title-sub-sm">
                    YEARS EXPERIENCE
                  </div>
                  <div className="slide-descr slide-descr-personal-services font-italic">
                    *Crafting beautiful brands and websites.
                    <a href="#Contact" className="text-primary text-underline">
                      Contact me
                    </a>
                    for more services.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h3 className="slide-title-info animate-element delay5 fadeInDown">
                From beginning ideas to individual integrity, rich identity from
                the line
                <span className="text-primary">
                  on the paper to final projects.
                </span>
              </h3>
            </div>
          </div>

          <div className="row animate-element delay5 fadeInUp">
            <div className="col-md-4 d-none d-md-block">
              <div className="slide-title-sub slide-title-sub-sm">
                YEARS
                <div className="d-none d-md-block"></div>
                EXPERIENCE
              </div>
              <div className="slide-descr slide-descr-personal-services font-italic">
                *Crafting beautiful brands and websites.
                <a href="#Contact" className="text-primary text-underline">
                  Contact me
                </a>
                for more services.
              </div>
            </div>
            <div className="col-md-8">
              <div className="service-list row">
                {props.services.map((service) => (
                  <ServiceCard
                    name={service.name}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSect;
