import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const Skills = () => {
  const backendTechnologies = [
    {
      name: ".NET Core",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    },
    {
      name: ".NET",
      image: "https://cdn.svgporn.com/logos/dotnet.svg",
    },
    {
      name: "Laravel",
      image: "https://cdn.svgporn.com/logos/laravel.svg",
    },
  ];

  const technologyElement = (technology, index) => {
    return (
      <Col key={index} className="text-center">
        <Image
          className="p-2"
          src={technology.image}
          style={({ minWidth: "100px" }, { maxWidth: "110px" })}
          fluid
        />
        <p>{technology.name}</p>
      </Col>
    );
  };

  const backendTechnologiesElements = backendTechnologies.map(
    technologyElement
  );

  return (
    <Container>
      <Row>
        <Col>
          <h2>Skills</h2>
          <div>
            <Card>
              <Card.Header>
                <h4>Back-End</h4>
              </Card.Header>
              <Card.Body>
                <Row className="d-flex flex-wrap">
                  {backendTechnologiesElements}
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
