import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const About = () => {
  return (
    <Container className="p-md-5">
      <Row>
        <Col md className="p-3 text-center order-md-first">
          <Image src="https://via.placeholder.com/350" rounded fluid />
        </Col>
        <Col md={8}>
          <h2>About</h2>
          <p>
            I am a 19-year-old software engineering student and a full-stack
            developer improving my programming and designing skills building
            multiple projects.
          </p>
          <p>
            My skills are mostly self-taught. I am an autodidact that considers
            that knowledge is the best investment in life.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
