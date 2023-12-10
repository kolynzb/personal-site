import ExperienceCard from "@components/cards/ExperienceCard";
import { IExperience } from "@lib/sanity.interface";
import React from "react";

type Props = {
  experiences: IExperience[];
};

const WorkExperience: React.FC<Props> = ({ experiences }) => {
  const numExperiencesPerList = 3;
  const numOfExperiences = experiences.length;

  const experienceLists = [];
  for (let i = 0; i < numOfExperiences; i += numExperiencesPerList) {
    const experiencesSubset = experiences.slice(i, i + numExperiencesPerList);
    const experienceCards = experiencesSubset.map((experience) => (
      <ExperienceCard key={experience._id} experience={experience} />
    ));

    experienceLists.push(
      <div className="experience-list" key={i}>
        {experienceCards}
      </div>
    );
  }
  return (
    <div className="section pp-scrollable slide-dark slide-personal-experience">
      <div className="slide-container">
        <div className="slide-bg">
          <div className="slide-photo slide-experience-image1"></div>
          <div className="slide-photo slide-experience-image2"></div>
          <div className="slide-photo slide-experience-image3"></div>
        </div>
        <div className="container">
          <div className="slide-num">5</div>
          <div className="row align-items-center mb-4 animate-element delay5 fadeInDown">
            <div className="col-8">
              <h2 className="slide-title mb-0">experience</h2>
            </div>
            <div className="col-4 text-right">
              <div className="a-carousel-nav carousel-nav"></div>
            </div>
          </div>
          <div className="animate-element delay5 fadeInUp">
            <div className="carousel-experience a-carousel-experience owl-carousel owl-theme">
              {experienceLists}
            </div>
            <div className="slide-btn">
              <a href="#" className="btn btn-success" download="cv.pdf">
                <i className="lni lni-download mr-3"></i>download my cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
