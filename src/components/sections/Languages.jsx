import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import languageIcon from "../../images/language_icon.png";

const Languages = () => {
  return (
    <Container className="p-md-5">
      <Row>
        <Col md className="p-3 text-center order-md-first">
          <Image src={languageIcon} rounded fluid />
        </Col>
        <Col md={8} className="text-justify">
          <h2>Languages</h2>
          <ul>
            <li>
              <h4>Spanish - Native</h4>
            </li>
            <li>
              <h4>English - C2</h4>
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
                I like japanese videogames, visual novels, and anime. During
                quarantine I decided to study japanese by myself and then enrolled
                in the japanese course of the university where I study.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Languages;
