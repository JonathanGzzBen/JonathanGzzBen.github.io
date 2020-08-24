import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Contact = () => {
  return (
    <Container className="p-md-5">
      <Row>
        <Col md className="p-3 text-center order-md-last">
          <Image src="https://via.placeholder.com/350" rounded fluid />
        </Col>
        <Col md={8}>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lobortis tempus urna, non sodales urna interdum a. Vestibulum sed
            diam tempor odio vehicula commodo. Vivamus massa eros, ullamcorper
            et posuere vel, varius ac diam. Integer id massa tincidunt, iaculis
            urna quis, aliquam ligula. Curabitur sapien est, faucibus vel odio
            in, tincidunt bibendum eros. Curabitur quis urna porta, commodo
            lectus id, faucibus ex. Duis in congue ipsum, vitae commodo augue.
            Sed ut consectetur sapien. Integer vulputate, lectus et venenatis
            pretium, arcu ex consequat mi, sit amet porttitor purus lectus a
            massa. Vivamus interdum felis eu felis mollis pharetra. Curabitur et
            sem.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
