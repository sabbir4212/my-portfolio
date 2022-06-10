import React from "react";
import "./Projects.css";
import project1 from "../../images/project-1.jpg";
import project2 from "../../images/project-2.jpg";
import project3 from "../../images/project-3.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="text-center fw-semibold">MY PROJECTS</h1>
      <hr />
      <div className="projects-container">
        <div className="project">
          <img src={project3} alt="" />
          <h4 className="fw-bold text-center my-3">Pro Tools</h4>
        <div className="d-flex justify-content-center px-2 mb-2">
            <a className="btn btn-primary" target={"_blank"} href="https://manufacturer-30951.web.app/">Live Site</a>
            <button className="btn btn-primary mx-4">Details</button>
            <a className="btn btn-primary" target={"_blank"} href="https://github.com/sabbir4212/warehouse-management-client-side">Github</a>
        </div>
        </div>
        <div className="project">
          <img src={project2} alt="" />
          <h4 className="fw-bold text-center my-3">Sheos House</h4>
          <div className="d-flex justify-content-center px-2 mb-2">
            <a className="btn btn-primary" target={"_blank"} href="https://warehouse-68b1a.web.app/">Live Site</a>
            <button className="btn btn-primary mx-4">Details</button>
            <a className="btn btn-primary" target={"_blank"} href="https://github.com/sabbir4212/shoes-house-management-client-side">Github</a>
        </div>
        </div>
        <div className="project">
          <img src={project1} alt="" />
          <h4 className="fw-bold text-center my-3">The Bodycoach</h4>
          <div className="d-flex justify-content-center px-2 mb-2">
            <a className="btn btn-primary" target={"_blank"} href="https://the-bodycoach-cf175.web.app/">Live Site</a>
            <button className="btn btn-primary mx-4">Details</button>
            <a className="btn btn-primary" target={"_blank"} href="https://github.com/sabbir4212/independent-service-provider">Github</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
