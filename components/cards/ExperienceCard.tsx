import { IExperience } from "@lib/sanity.interface";
import React from "react";

type Props = {
  experience: IExperience;
};

const colorClasses = ["blue", "green", "pink"];
const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="row">
        <div className="col-md-4">
          <div className="experience-item-date">{`${new Date(
            experience.startDate
          ).getFullYear()}-${
            experience.endDate
              ? new Date(experience?.endDate).getFullYear()
              : new Date().getFullYear()
          }`}</div>
          <div
            className={`experience-item-company slide-title-sub company-${colorClasses[0]}`}
          >
            {experience.company.name}
          </div>
        </div>
        <div className="col-md-4">
          <div className="experience-item-title slide-title-sub">
            {experience.title}
          </div>
        </div>
        <div className="col-md-4">
          <div className="experience-item-descr slide-descr">
            {experience.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
