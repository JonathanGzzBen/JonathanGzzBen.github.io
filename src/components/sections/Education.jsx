import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Education = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col md className="p-3 order-md-last">
          <Image src="https://via.placeholder.com/350" rounded fluid />
        </Col>
        <Col md={8}>
          <h2>Education</h2>
          <ul>
            <li>
              <h4>Technician: Mechatronics</h4>
              <h6>
                Industrial School and Technical Highschool “Alvaro Obregon”
              </h6>
              <p>
                I studied mechatronics as an introduction to engineering, I was
                part of the German Progressive group, where I studied german and
                passed an unofficial A1 exam.
              </p>
            </li>
            <li>
              <h4>Technician: Software Development</h4>
              <h6>Faculty of Mechanical and Electrical Engineering</h6>
              <p>
                I decided to study this second technical career at the same time
                since I had already decided I wanted to dedicate my life to
                software development, and I wanted a title to back me up.
              </p>
            </li>
            <li>
              <h4>Bachelor of Engineering: Software Technology</h4>
              <h6>Faculty of Mechanical and Electrical Engineering</h6>
              <p>
                I am currently studying software engineering; it mostly serves
                as a reinforcement to what I study my myself.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
