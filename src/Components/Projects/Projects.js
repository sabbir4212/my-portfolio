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

      {/*----------- Modal Start -----------*/}
      {/*----------- Product 1 -----------*/}
      <div
        className="modal fade"
        id="pro-tools-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Pro Tools
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={project1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

{/*----------- Product 2 -----------*/}
<div
        className="modal fade"
        id="shoes-house-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Pro Tools
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id="carouselExampleControls2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={project2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*----------- Product 3 -----------*/}
      <div
        className="modal fade"
        id="the-bodycoach"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Pro Tools
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id="carouselExampleControls3"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={project3} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                    <li className="text-dark">My Modal List</li>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls3"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*----------- Modal End -----------*/}
      <div className="projects-container">
        <div className="project">
          <img src={project3} alt="" />
          <h4 className="fw-bold text-center my-3">Pro Tools</h4>
          <div className="d-flex justify-content-center px-2 mb-2">
            <a
              className="btn btn-primary"
              target={"_blank"}
              href="https://manufacturer-30951.web.app/"
            >
              Live Site
            </a>
            <button
              type="button"
              className="btn btn-primary mx-4"
              data-bs-toggle="modal"
              data-bs-target="#pro-tools-modal"
            >
              Details
            </button>
            <a
              className="btn btn-primary"
              target={"_blank"}
              href="https://github.com/sabbir4212/warehouse-management-client-side"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project">
          <img src={project2} alt="" />
          <h4 className="fw-bold text-center my-3">Sheos House</h4>
          <div className="d-flex justify-content-center px-2 mb-2">
            <a
              className="btn btn-primary"
              target={"_blank"}
              href="https://warehouse-68b1a.web.app/"
            >
              Live Site
            </a>
            <button
              type="button"
              className="btn btn-primary mx-4"
              data-bs-toggle="modal"
              data-bs-target="#shoes-house-modal"
            >
              Details
            </button>
            <a
              className="btn btn-primary"
              target={"_blank"}
              href="https://github.com/sabbir4212/shoes-house-management-client-side"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project">
          <img src={project1} alt="" />
          <h4 className="fw-bold text-center my-3">The Bodycoach</h4>
          <div className="d-flex justify-content-center px-2 mb-2">
            <a
              className="btn btn-primary"
              target={"_blank"}
              href="https://the-bodycoach-cf175.web.app/"
            >
              Live Site
            </a>
            <button
              type="button"
              className="btn btn-primary mx-4"
              data-bs-toggle="modal"
              data-bs-target="#the-bodycoach"
            >
              Details
            </button>
            <a
              className="btn btn-primary"
              target={"_blank"}
              href="https://github.com/sabbir4212/independent-service-provider"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
