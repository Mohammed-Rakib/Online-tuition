import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="https://e7.pngegg.com/pngimages/446/175/png-clipart-tuition-payments-private-university-private-school-tutoring-class-text-logo.png"
              className="logo "
              fluid
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/tutors"
              >
                Tutors
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
