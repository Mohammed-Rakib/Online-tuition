import React from "react";
import { Container, Row } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <Container>
      <h6 className="common-text mt-4">
        We Provide the Best Tutoring Service.
      </h6>
      <h1>
        Useful <span className="main-text">Information</span>{" "}
      </h1>
      <div className="about">
        <Row>
          <div className="col-lg-6 col-md-6 bg-light my-5 p-5">
            <h3 className="common-text">Most Popular</h3>
            <h1>Trending Subjects</h1>
            <ul>
              <li>Basic English</li>
              <li>ILTES Preparation</li>
              <li>TOEFL Preparation</li>
              <li>English Speking</li>
              <li>Academic English</li>
              <li>Creative Writing</li>
            </ul>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default About;
