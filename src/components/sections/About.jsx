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
        <Col md={8} className="text-justify">
          <h2>About me</h2>
          <p>
            I love computers and the endless world of software that programmers
            have built. My admiration for them is what brought me to dedicate my
            life to software development.
          </p>
          <p>
            C/C++ are the programming languages I use the most since I like
            systems programming, directly controlling hardware or consuming
            the operating system's libraries.
          </p>
          <p>
            I also like reading light nivels, visual novels, playing MMORPGs and
            configuring my Arch Linux environment. Yeah, I use Arch btw.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
