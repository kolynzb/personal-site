import ProjectPageSlide from "@components/slides/ProjectPageSlide";
import { getProjects } from "@lib/sanity.api";
import React from "react";

type Props = {};

const ProjectPage = async (props: Props) => {
  const projects = await getProjects();
  return (
    <main className="pagepiling">
      {projects.map((project, key) => (
        <ProjectPageSlide key={key} index={key} project={project} />
      ))}
    </main>
  );
};

export default ProjectPage;
