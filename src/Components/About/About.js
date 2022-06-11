import React from "react";
import "./About.css";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <h1 className="fw-bold text-center">ABOUT ME</h1>
      <hr />
      <div className="about-me">
        <div className="about-me-half">
          <div className="">
            <p
              style={{ letterSpacing: ".5px", fontWeight: "300" }}
              className="fs-4 "
            >
              <span className="fw-bold">Name: </span>Md Sabbir Hossan
            </p>
            <p
              style={{ letterSpacing: ".5px", fontWeight: "300" }}
              className="fs-4 "
            >
              <span className="fw-bold">Address: </span>Tangail, Dhaka,
              Bangladesh
            </p>
            <p
              style={{ letterSpacing: ".5px", fontWeight: "300" }}
              className="fs-4 "
            >
              <span className="fw-bold">Age: </span>19+
            </p>
            <p
              style={{ letterSpacing: ".5px", fontWeight: "300" }}
              className="fs-4 "
            >
              <span className="fw-bold">Email: </span>sabbirhosan370@gmail.com
            </p>
            <p
              style={{ letterSpacing: ".5px", fontWeight: "300" }}
              className="fs-4 "
            >
              <span className="fw-bold">Phome: </span>+8801303871763
            </p>
            <p
              style={{ letterSpacing: ".5px", fontWeight: "300" }}
              className="fs-4 "
            >
              <span className="fw-bold">Education: </span>SSC Pass 2021 from
              Satsanga Tapoban High School
            </p>
          </div>
        </div>

        <div className="about-me-half mt-5 md-mt-0">
          <div className="d-flex justify-content-between">
            <a
              className="text-center mx-2 md-mx-3"
              target={"_blank"}
              href="https://www.facebook.com/profile.php?id=100028217645722"
            >
              <FaFacebookSquare style={{ fontSize: "35px" }}></FaFacebookSquare>
              <h5 className="text-decoration-underline text-primary">
                Facebook
              </h5>
            </a>
            <a
              className="text-center mx-2 md-mx-3"
              target={"_blank"}
              href="https://twitter.com/MdSabbi14327579"
            >
              <FaTwitterSquare style={{ fontSize: "35px" }}></FaTwitterSquare>
              <h5 className="text-decoration-underline text-primary">
                Twitter
              </h5>
            </a>
            <a
              className="text-center mx-2 md-mx-3"
              target={"_blank"}
              href="https://www.linkedin.com/in/md-sabbir-a56163241/"
            >
              <FaLinkedin style={{ fontSize: "35px" }}></FaLinkedin>
              <h5 className="text-decoration-underline text-primary">
                Linkedin
              </h5>
            </a>
            <a
              className="text-center mx-2 md-mx-3"
              target={"_blank"}
              href="https://github.com/sabbir4212"
            >
              <FaGithubSquare style={{ fontSize: "35px" }}></FaGithubSquare>
              <h5 className="text-decoration-underline text-primary">Github</h5>
            </a>
          </div>
          <div className="my-experience my-4 text-center">
            <div className="p-4 exprience rounded bg-secondary">
              <h1>1+</h1>
              <p>Year Of Experience</p>
            </div>
            <div className="p-4 exprience rounded bg-secondary">
              <h1>20+</h1>
              <p>Projects Completed</p>
            </div>
            <div className="p-4 exprience rounded bg-secondary">
              <h1>5+</h1>
              <p>Happy Client</p>
            </div>
            <div className="p-4 exprience rounded bg-secondary">
              <h1>1+</h1>
              <p>Award Won</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
