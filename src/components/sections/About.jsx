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
            I have always loved computers and how they have shaped the world,
            now I know that this is thanks to programmers that have built an
            endless world of software. This thought is what brought me to
            dedicate my life to programming.
          </p>
          <p>
            My skills are mostly self-taught through books and online courses. I
            am an autodidact that considers that learning is the best investment
            in life.
          </p>
          <p>
            As a full stack developer, I enjoy using my love for learning and
            programming to improve by building software that helps people do
            what they enjoy doing. That's why I'm excited to make a big impact
            at a high growth company.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
