import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CourseContext } from "../../../App";
import Course from "../../course/course";

const Courses = () => {
  const [courses, setCourses] = useContext(CourseContext);
  const showCourse = courses.slice(0, 4);

  useEffect(() => {
    fetch("./courses.JSON")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

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
