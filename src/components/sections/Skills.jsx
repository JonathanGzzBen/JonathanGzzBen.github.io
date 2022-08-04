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
    getTechnologyObject("C", "https://cdn.svgporn.com/logos/c.svg"),
    getTechnologyObject("C++", "https://cdn.svgporn.com/logos/c-plusplus.svg"),
    getTechnologyObject("Java", "https://cdn.svgporn.com/logos/java.svg"),
    getTechnologyObject("Go", "https://cdn.svgporn.com/logos/go.svg"),
    getTechnologyObject("Python", "https://cdn.svgporn.com/logos/python.svg"),
    getTechnologyObject(
      "JavaScript",
      "https://cdn.svgporn.com/logos/javascript.svg"
    ),
  ];
  
  const frameworks = [
    getTechnologyObject("Qt", "https://cdn.svgporn.com/logos/qt.svg"),
    getTechnologyObject("Spring", "https://cdn.svgporn.com/logos/spring-icon.svg"),
    getTechnologyObject("Google Tests", "https://pluspng.com/img-png/google-developers-logo-png-google-developers-512.png"),
    getTechnologyObject("Next.js", "https://cdn.svgporn.com/logos/nextjs.svg"),
  ]
  
  const tools = [
    getTechnologyObject("Git", "https://cdn.svgporn.com/logos/git-icon.svg"),
    getTechnologyObject("CMake", "https://freesvg.org/img/cmake2.png"),
    getTechnologyObject("Conan", "https://cdn.svgporn.com/logos/conan-io.svg"),
    getTechnologyObject("GNU Tools", "https://cdn.iconscout.com/icon/free/png-256/gnu-202387.png"),
    getTechnologyObject("Clang Tools", "https://llvm.org/img/DragonMedium.png"),
  ]

  const databases = [
    getTechnologyObject("MySQL", "https://cdn.svgporn.com/logos/mysql.svg"),
    getTechnologyObject(
      "MS SQL",
      "https://img.icons8.com/color/96/000000/microsoft-sql-server.png"
    ),
    getTechnologyObject("PostgreSQL", "https://cdn.svgporn.com/logos/postgresql.svg"),
    getTechnologyObject("Sybase SQL", "https://www.iconshock.com/image/Diamond/Database/sybase/"),
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
      "GNU/Linux",
      "https://cdn.svgporn.com/logos/linux-tux.svg"
    ),
    getTechnologyObject(
      "Microsoft Azure",
      "https://cdn.svgporn.com/logos/microsoft-azure.svg"
    ),
  ];

  const technologiesGroupsElements = [
    getTechnologiesGroupElement("Programming Languages", programmingLanguages),
    getTechnologiesGroupElement("Frameworks", frameworks),
    getTechnologiesGroupElement("Tools", tools),
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
