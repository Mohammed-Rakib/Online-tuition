import React from "react";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { CourseContext } from "../../App";
import "./courseDetails.css";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const CourseDetails = () => {
  const { id } = useParams();
  const [courses] = useContext(CourseContext);
  const course = courses.filter((c) => c.id === id);
  const { name, price, description, thumb } = course[0];
  console.log(course);

  return (
    <Container className="course-details">
      <Row>
        <div className="col-lg-6 col-md-6 py-5 border-end">
          <img src={thumb} className="img-fluid pt-5" alt="" />
          <h1 className="main-text mt-4">{name}</h1>
          <h6 className="common-text my-3">{description}</h6>
          <h3>
            <small>$</small>
            {price}
          </h3>
        </div>
        <div className="col-lg-6 col-md-6 py-5 ">
          <h3 className="common-text pt-5">
            {" "}
            <BsBoxArrowInUpRight className="text-success" /> 100% Authentic
          </h3>
          <h3 className="common-text">
            {" "}
            <BsBoxArrowInUpRight className="text-success" /> Certification
          </h3>
        </div>
      </Row>
    </Container>
  );
};

export default CourseDetails;
