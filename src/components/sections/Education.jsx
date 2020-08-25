import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Education = () => {
  return (
    <Container className="p-md-5">
      <Row>
        <Col md className="p-3 text-center order-md-last">
          <Image src="https://via.placeholder.com/350" rounded fluid />
        </Col>
        <Col md={8}>
          <h2>Education</h2>
          <ul>
            <li>
              <h4>Technician: Mechatronics</h4>
              <h6>
                Industrial School and Technical Highschool “Álvaro Obregón”
              </h6>
              <p>
                I studied mechatronics as an introduction to engineering, I was
                part of the German Progressive group, where I studied german and
                passed an unofficial A1 exam.
              </p>
            </li>
            <li>
              <h4>Technician: Software Development</h4>
              <h6>Autonomous University of Nuevo León</h6>
              <p>
                When I decided I would dedicate myself to software development,
                I enrolled to study a second technical career to back up my
                knowledge.
              </p>
            </li>
            <li>
              <h4>Bachelor of Engineering: Software Technology</h4>
              <h6>Autonomous University of Nuevo León</h6>
              <p>
                I am currently studying software engineering; I can meet other
                programmers, learn concepts, and understand the fundamentals of
                software.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
