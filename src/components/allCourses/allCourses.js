import React from "react";
import { Container } from "react-bootstrap";
import Course from "../course/course";
import useCourses from "../hooks/useCourses";

const AllCourses = () => {
  const [courses] = useCourses();
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
