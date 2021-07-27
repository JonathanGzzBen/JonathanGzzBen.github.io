import React from "react";
import streamersliveScreenshot from "../../images/projects/streamerslive/streamersliveScreenshot.png";
import abarrotesRaguePortada from "../../images/projects/abarrotes-rague/AbarrotesRaGuePortada.png";
import jotnoteScreenshot from "../../images/projects/jotnote/jotnoteScreenshot.png";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import styles from "../../styles/ProjectCard.module.css";

const Projects = () => {
  const getProjectCard = (title, image, description, skills) => {
    return (
      <Card className={styles.ProjectCard}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            <b>{title}</b>
          </Card.Title>
          <Card.Text>
            <p>{description}</p>
            <b>Skills learned/used</b>
            <Row>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const getLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );

  const projectsCards = [
    getProjectCard(
      <>
          Abarrotes Rague
      </>,
      abarrotesRaguePortada,
      "Abarrotes RaGue is a shopping platform I made for a local store.",
      [
        "JavaScript",
        "Firebase",
        <>
          Deploying to a VPS
        </>,
      ]
    ),
    getProjectCard(
      <>
        {getLink(
          "streamerslive",
          "https://github.com/JonathanGzzBen/streamerslive"
        )}
      </>,
      streamersliveScreenshot,
      "streamerslive is a command-line tool that will allow you to register Twitch or Youtube channels, so you can check which of them are streaming at the moment.",
      [
        "Go",
        "Twitch API",
        "Web scraping",
        <>
          Building CLIs using{" "}
          {getLink("Cobra", "https://github.com/spf13/cobra")}
        </>,
        "Git tagging",
        <>
          {getLink(
            "Releasing on Github",
            "https://github.com/JonathanGzzBen/streamerslive/releases"
          )}
        </>,
        <>
          {getLink(
            "Releasing Go Package",
            "https://pkg.go.dev/github.com/JonathanGzzBen/streamerslive"
          )}
        </>,
      ]
    ),
    getProjectCard(
      <>{getLink("JotNote", "https://github.com/JonathanGzzBen/JotNote")}</>,
      jotnoteScreenshot,
      "JotNote is a command line tool to jot notes.",
      [
        "Python",
        "SQLite",
        "Handling configurations",
        <>
          Building CLIs using{" "}
          {getLink("Click", "https://click.palletsprojects.com/en/7.x/")}
        </>,
        "Packaging Python project",
      ]
    ),
  ];
  return (
    <Container className="p-md-5">
      <Row>
        <Col>
          <h2>Recent Projects</h2>
          <p>These are my most recent projects, most of them open source.</p>
        </Col>
      </Row>
      <Row>
        <CardGroup>{projectsCards}</CardGroup>
      </Row>
    </Container>
  );
};

export default Projects;
