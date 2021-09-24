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
            style={
              ({ minWidth: "80px" },
              { maxWidth: "110px" },
              { maxHeight: "110px" })
            }
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

  const programmingLanguages = [
    getTechnologyObject("Go", "https://cdn.svgporn.com/logos/go.svg"),
    getTechnologyObject("C", "https://cdn.svgporn.com/logos/c.svg"),
    getTechnologyObject("C++", "https://cdn.svgporn.com/logos/c-plusplus.svg"),
    getTechnologyObject("C#", "https://cdn.svgporn.com/logos/c-sharp.svg"),
    getTechnologyObject("Python", "https://cdn.svgporn.com/logos/python.svg"),
    getTechnologyObject(
      "JavaScript",
      "https://cdn.svgporn.com/logos/javascript.svg"
    ),
  ];

  const backendTechnologies = [
    getTechnologyObject("Go", "https://cdn.svgporn.com/logos/go.svg"),
    getTechnologyObject(
      ".NET Core",
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg"
    ),
    getTechnologyObject("Laravel", "https://cdn.svgporn.com/logos/laravel.svg"),
    getTechnologyObject(
      "Firebase",
      "https://cdn.svgporn.com/logos/firebase.svg"
    ),
  ];

  const frontendTechnologies = [
    getTechnologyObject("React", "https://cdn.svgporn.com/logos/react.svg"),
    getTechnologyObject("Next.js", "https://cdn.svgporn.com/logos/nextjs.svg"),
    getTechnologyObject("Vue.js", "https://cdn.svgporn.com/logos/vue.svg"),
    getTechnologyObject(
      "Bootstrap",
      "https://cdn.svgporn.com/logos/bootstrap.svg"
    ),
  ];

  const databases = [
    getTechnologyObject("MySQL", "https://cdn.svgporn.com/logos/mysql.svg"),
    getTechnologyObject(
      "MS SQL",
      "https://img.icons8.com/color/96/000000/microsoft-sql-server.png"
    ),
    getTechnologyObject("MongoDB", "https://cdn.svgporn.com/logos/mongodb.svg"),
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
    getTechnologyObject(
      "UNIX/Linux",
      "https://cdn.svgporn.com/logos/linux-tux.svg"
    ),
    getTechnologyObject(
      "Microsoft Azure",
      "https://cdn.svgporn.com/logos/azure-icon.svg"
    ),
  ];

  const technologiesGroupsElements = [
    getTechnologiesGroupElement("Programming Languages", programmingLanguages),
    getTechnologiesGroupElement("Back-End", backendTechnologies),
    getTechnologiesGroupElement("Front-End", frontendTechnologies),
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
