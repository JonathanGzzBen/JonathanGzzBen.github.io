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
            style={({ minWidth: "80px" }, { maxWidth: "110px" }, {maxHeight: "110px"})}
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
            <Row
              className="d-flex flex-wrap"
              style={{ alignItems: "flex-end" }}
            >
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
    getTechnologyObject("Firebase", "https://cdn.svgporn.com/logos/firebase.svg")
  ];

  const frontendTechnologies = [
    getTechnologyObject("React", "https://cdn.svgporn.com/logos/react.svg"),
    getTechnologyObject("Vue.js", "https://cdn.svgporn.com/logos/vue.svg"),
    getTechnologyObject(
      "Bootstrap",
      "https://cdn.svgporn.com/logos/bootstrap.svg"
    ),
  ];

  const editingSoftware = [
    getTechnologyObject(
      "Photoshop",
      "https://cdn.cdnlogo.com/logos/p/64/photoshop-cc.svg"
    ),
    getTechnologyObject(
      "Camtasia",
      "https://img.icons8.com/color/240/000000/camtasia-studio.png"
    ),
    getTechnologyObject(
      "DaVinci Resolve",
      "https://img.icons8.com/plasticine/200/000000/davinci-resolve.png"
    ),
    getTechnologyObject(
      "Audacity",
      "https://img.icons8.com/color/256/000000/audacity.png"
    ),
  ];

  const databases = [
    getTechnologyObject("MySQL", "https://cdn.svgporn.com/logos/mysql.svg"),
    getTechnologyObject(
      "MS SQL",
      "https://img.icons8.com/color/96/000000/microsoft-sql-server.png"
    ),
    getTechnologyObject("SQLite", "https://cdn.svgporn.com/logos/sqlite.svg"),
  ];

  const otherTechnologies = [
    getTechnologyObject(
      "GitHub",
      "https://cdn.svgporn.com/logos/github-icon.svg"
    ),
    getTechnologyObject(
      "Docker",
      "https://cdn.svgporn.com/logos/docker-icon.svg"
    ),
  ];

  const technologiesGroupsElements = [
    getTechnologiesGroupElement("Back-End", backendTechnologies),
    getTechnologiesGroupElement("Front-End", frontendTechnologies),
    getTechnologiesGroupElement("Editing Software", editingSoftware),
    getTechnologiesGroupElement("Databases", databases),
    getTechnologiesGroupElement("Other", otherTechnologies),
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
