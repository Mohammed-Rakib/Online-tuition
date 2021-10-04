import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner from "../../../images/header-bg.png";
import "./banner.css";

const Banner = () => {
  return (
    <Container className="my-4">
      <div className="text-center py-4">
        <h1 className="main-text">Know why we are best</h1>
        <h5 className="text-uppercase banner-title common-text">
          learning via app never gets easier
        </h5>
      </div>
      <Row>
        <Col>
          <h1 className="mb-3 main-text">
            The Prodigious eLearning Courses for you
          </h1>
          <p className="common-text">
            We provide best quality Courses for you via apps and website.
          </p>

          <ul className="banner-ul">
            <li>Creative Study Pattern</li>
            <li>Quick Crash Courses</li>
            <li>Privided with Experimental Examples</li>
            <li>Certification Awarded</li>
          </ul>
        </Col>
        <Col>
          <img src={banner} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
