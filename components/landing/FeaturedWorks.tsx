import ProjectSlide from "@components/slides/ProjectSlide";
import { IProject } from "@lib/sanity.interface";
import React from "react";

type Props = {
  projects: IProject[];
};

const FeaturedWorks = (props: Props) => {
  return (
    <div className="section pp-scrollable slide-dark slide-dark-bg text-white slide-personal-projects">
      <div className="carousel-project-personal a-carousel-projects owl-carousel owl-theme">
        {props.projects.map((project, key) => (
          <ProjectSlide project={project} key={key} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWorks;
