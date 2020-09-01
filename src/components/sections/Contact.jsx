import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import workOnLaptop from "../../images/work-on-laptop.png";

const Contact = () => {
  return (
    <Container className="p-md-5">
      <Row>
        <Col md className="p-3 text-center order-md-last">
          <Image src={workOnLaptop} rounded fluid />
        </Col>
        <Col md={8}>
          <h2>Contact</h2>
          <p>
            I’m available for freelance projects or part-time work. If you are
            interested in working with me, or simply want to say hi, send me an
            email.
          </p>
          <ListGroup>
            <ListGroup.Item>
              <i className="far fa-envelope p-2"></i>
              jonathangzzben@gmail.com
            </ListGroup.Item>
          </ListGroup>
          <p className="mt-3">
            Also, check out my GitHub profile to see what I'm working on
          </p>
          <ListGroup>
            <ListGroup.Item>
              <i class="fab fa-github"></i>
              <a href="https://www.github.com/JonathanGzzBen" target="_blank">
                /JonathanGzzBen
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
