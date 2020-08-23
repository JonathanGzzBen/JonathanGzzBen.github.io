import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Languages = () => {
  return (
    <Container className="p-5">
      <Row>
        <Col md className="p-3 order-md-first">
          <Image src="https://via.placeholder.com/350" rounded fluid />
        </Col>
        <Col md={8}>
          <h2>Languages</h2>
          <ul>
            <li>
              <h4>Spanish - Native</h4>
              <p>
                Studied english when I was 11 years old at a private school. I
                consume everything I can in english, such as books, movies, or
                videogames in order to improve my vocabulary and fluency.
              </p>
            </li>
            <li>
              <h4>French – DELF A1 Certified</h4>
              <p>Member of the French Club in junior high school.</p>
            </li>
            <li>
              <h4>German – Unofficial A1 Exam</h4>
              <p>
                As part of the german progressive group in high school, there
                was a final test to measure our german level.
              </p>
            </li>
            <li>
              <h4>Japanese – Currently studying</h4>
              <p>
                I like japanese videogames and anime, I decided to study
                japanese by myself during the middle of quarantine, and now it
                has become a habit to study grammar and learn some kanji each
                day.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Languages;
