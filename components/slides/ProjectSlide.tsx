import { IProject } from "@lib/sanity.interface";
import Link from "next/link";
import React from "react";
import { dateToMonthYearFormat } from "@utils/datetime";

type Props = {
  project: IProject;
};

const ProjectSlide: React.FC<Props> = ({ project }) => {
  return (
    <div
      className="carousel-project-item"
      style={{
        backgroundImage: `url(${project.mainImage})`,
      }}
    >
      <div className="slide-container">
        <div className="container">
          <div className="slide-num">3</div>
          <div className="animate-element delay5 fadeInDown">
            <div className="row">
              <div className="col-md-7">
                <div className="slide-title-sub slide-title-sub-md">
                  featured works
                </div>
              </div>
              <div className="col-md-5 text-md-right">
                <div className="project-date">
                  {dateToMonthYearFormat(project.startDate)}
                </div>
                <div className="slide-title-sub slide-title-sub-md mb-md-3">
                  {project.categories[0].title}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <h3 className="slide-title text-white">{project.title}</h3>
                <div className="row">
                  <div className="col-lg-8">
                    <div className="slide-descr slide-descr-projects">
                      {project.summary}
                    </div>
                  </div>
                </div>
                <div className="slide-btn slide-btn-projects">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn btn-success"
                  >
                    view project
                  </Link>
                  <Link
                    href="/projects/"
                    className="slide-projects-more mt-2 mb-2"
                  >
                    see all projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
