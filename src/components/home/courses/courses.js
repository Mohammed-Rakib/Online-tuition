import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Course from "../../course/course";
import useCourses from "../../hooks/useCourses";

const Courses = () => {
  const [courses] = useCourses();
  const showCourse = courses.slice(0, 4);

  return (
    <Container className="py-5">
      <h1 className="text-center text-info">Courses</h1>
      <div className="row">
        {showCourse.map((course) => (
          <Course key={course.id} course={course}>
            {" "}
          </Course>
        ))}{" "}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-info mt-5">
          <Link to="/courses" className="btn">
            all courses
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default Courses;
