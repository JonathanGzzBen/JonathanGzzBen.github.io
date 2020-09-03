import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const Skills = () => {
  const getTechnologyObject = (name, image) => ({
    name: name,
    image: image,
  });

  const getTechnologiesGroupElement = (groupName, technologies) => {
    const getTechnologyElement = (technology, index) => {
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
    return (
      <div className="pt-2 pb-2">
        <Card>
          <Card.Header>
            <h4>{groupName}</h4>
          </Card.Header>
          <Card.Body>
            <Row className="d-flex flex-wrap">
              {technologies.map(getTechnologyElement)}
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  };

  const backendTechnologies = [
    getTechnologyObject(
      ".NET Core",
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
    ),
    getTechnologyObject(".NET", "https://cdn.svgporn.com/logos/dotnet.svg"),
    getTechnologyObject("Laravel", "https://cdn.svgporn.com/logos/laravel.svg"),
  ];

  const frontendTechnologies = [
    getTechnologyObject("React", "https://cdn.svgporn.com/logos/react.svg"),
    getTechnologyObject("Vue.js", "https://cdn.svgporn.com/logos/vue.svg"),
    getTechnologyObject(
      "Bootstrap",
      "https://cdn.svgporn.com/logos/bootstrap.svg"
    ),
  ];

  const technologiesGroupsElements = [
    getTechnologiesGroupElement("Back-End", backendTechnologies),
    getTechnologiesGroupElement("Front-End", frontendTechnologies),
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h2>Skills</h2>
          {technologiesGroupsElements &&
            technologiesGroupsElements.map((technologiesGroup, index) => {
              return <div key={index}>{technologiesGroup}</div>;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
