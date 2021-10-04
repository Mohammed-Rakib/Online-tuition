import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="py-5 my-5 text-center">
      <h1>404 Error!</h1>
      <h4>Page does not exist.</h4>
    </Container>
  );
};

export default NotFound;
