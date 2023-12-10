import { IProject } from "@lib/sanity.interface";
import Link from "next/link";
import React from "react";

type Props = {
  project: IProject;
  index: number;
};

const ProjectPageSlide: React.FC<Props> = ({ project, index }) => {
  return (
    <section
      data-anchor="page1"
      className="pp-scrollable text-white section section-1"
    >
      <div className="scroll-wrap">
        <figure
          className="section-bg"
          style={{ backgroundImage: `url(${project.mainImage});` }}
        ></figure>
        <div className="scrollable-content">
          <div className="vertical-centred v2">
            <div className="boxed boxed-inner">
              <div className="boxed">
                <div className="container">
                  <div className="intro">
                    <div className="project-detail-row">
                      <Link className="" href={`/project/${project.slug}`}>
                        <span className="project-number">
                          {index.toString().padStart(2, "0")}
                        </span>
                        <h2 className="project-title">{project.title}</h2>
                        <div className="project-category">
                          {project.categories[0].title}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPageSlide;
