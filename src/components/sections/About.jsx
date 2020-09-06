import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import myPicture from "../../images/myPicture.png";

const About = () => {
  return (
    <Container className="p-md-5">
      <Row>
        <Col md className="p-3 text-center order-md-first">
          <Image src={myPicture} rounded fluid />
        </Col>
        <Col md={8}>
          <h2>About me</h2>
          <p>
            I love computers and the endless world of software that programmers
            have built. My admiration for them is what brought me to dedicate my
            life to programming.
          </p>
          <p>
            Most of my skills are self-taught. I am an autodidact that considers
            that learning is the best investment in life.
          </p>
          <p>
            My mission is improving as software engineer to build things that
            have a big impact.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
