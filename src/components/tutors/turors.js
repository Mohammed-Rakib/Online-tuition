import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Tutor from "./tutor";

const Tutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setTutors(data));
  }, []);
  return (
    <Container className="my-3">
      <h1 className="text-center my-5">
        Available Tutors: <span className="text-info">{tutors.length}</span>{" "}
      </h1>
      <Row>
        {tutors.map((tutor) => (
          <Tutor key={tutor.id} tutor={tutor}></Tutor>
        ))}
      </Row>
    </Container>
  );
};

export default Tutors;
