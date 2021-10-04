import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container className="py-3 mt-3">
        <Row>
          <Col>
            <h2>Links</h2>
            <ul>
              <li>Courses</li>
              <li>Tutors</li>
              <li>Quiz & Tests</li>
            </ul>
          </Col>
          <Col>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Talk To Us</li>
              <li>Help</li>
            </ul>
          </Col>
          <Col>
            <h2>Contact us</h2>
            <ul>
              <li>
                <MdLocationOn className="mb-1 me-2" />
                <strong>Address: </strong> Gulshan,Dhaka
              </li>
              <li>
                <AiTwotonePhone className="mb-1 me-2" />
                <strong>Phone:</strong>+88011111111
              </li>
              <li>
                <HiOutlineMail className="mb-1 me-2" />
                <strong>Email:</strong>emali@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
