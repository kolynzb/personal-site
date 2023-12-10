/* eslint-disable @next/next/no-img-element */
import { getProject } from "@lib/sanity.api";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const ProjectDetails = async ({ params: { slug } }: Props) => {
  const project = await getProject(slug);
  return (
    <div className="content">
      <div className="container">
        <div className="row row-project">
          <div className="col-project-name col-md-6  mt-5 mb-5 mb-md-0">
            <h1>{project.title}</h1>
            <div className="social-list social-list-detail">
              <a href="" className="icon ion-social-twitter"></a>
              <a href="" className="icon ion-social-facebook"></a>
              <a href="" className="icon ion-social-googleplus"></a>
              <a href="" className="icon ion-social-linkedin"></a>
              <a href="" className="icon ion-social-dribbble-outline"></a>
            </div>
          </div>
          <div className="col-project-info col-md-6">
            <div className="row">
              <div className="col-md-6 mt-5">
                <h5>Client</h5>
                <p>California Art Gallery Museum</p>
              </div>
              <div className="col-md-6 mt-5">
                <h5>Team</h5>
                <p>
                  Dustin Mahone - iOS Developer
                  <br />
                  Paul tf - Designer
                </p>
              </div>
              <div className="col-md-6 mt-5">
                <h5>Services</h5>
                <p>
                  {project.categories.map((category) => (
                    <React.Fragment key={category._id}>
                      {category.title},
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="col-md-6 mt-5">
                <h5>Date</h5>
                <p>Feburary 25th, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt=""
        className="image-holder wow fadeIn"
        src="images/bg/project3.jpg"
      />
      <div className="container">
        <p className="project-detail-text text-center">
          Brole is a startup that aims to supply energy (starting with gas) to
          domestic household across the UK. Create a very simple yet stunning
          logotype and promo site that sets the brand of Entice Energy apart
          from the competitors like a fresh take on an already saturated area.{" "}
          <a
            href="https://example.domain/denima6vsco"
            target="_blank"
            className="underline"
          >
            https://example.domain/denima6vsco
          </a>
        </p>
        <img
          alt=""
          className="image-holder wow fadeInLeft"
          src="images/bg/project3-1.jpg"
        />
        <img
          alt=""
          className="image-holder wow fadeInRight"
          src="images/bg/project3-2.jpg"
        />
        <p className="project-detail-text text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          quaerat harum, tempora quia molestiae repudiandae ex eaque dolorem
          porro necessitatibus totam voluptas placeat voluptates nemo amet
          aliquid impedit vel? Asperiores?
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
