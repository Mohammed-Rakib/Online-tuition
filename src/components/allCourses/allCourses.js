import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CourseContext } from "../../App";
import Course from "../course/course";

const AllCourses = () => {
  const [courses] = useContext(CourseContext);

  return (
    <Container className="py-5">
      <div className="text-center">
        <h1>
          Available Courses:{" "}
          <span className="text-success">{courses.length}</span>{" "}
        </h1>
      </div>
      <div className="row">
        {courses.map((course) => (
          <Course key={course.id} course={course}>
            {" "}
          </Course>
        ))}
      </div>
    </Container>
  );
};

export default AllCourses;
