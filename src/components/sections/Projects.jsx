import React from "react";
import streamersliveScreenshot from "../../images/projects/streamerslive/streamersliveScreenshot.png";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

const Projects = () => {
  return (
    <Container className="p-md-5">
      <Row>
        <Col>
          <h2>Recent Projects</h2>
          <p>These are my most recent open source projects.</p>
        </Col>
      </Row>
      <Row>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={streamersliveScreenshot} />
            <Card.Body>
              <Card.Title>
                <b>
                  <a
                    href="https://github.com/JonathanGzzBen/streamerslive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    streamerslive
                  </a>
                </b>
              </Card.Title>
              <Card.Text>
                <p>
                  streamerslive is a command-line tool that will allow you to
                  register Twitch or Youtube channels, so you can check which of
                  them are streaming at the moment.
                </p>
                <p>
                  <b>Skills learned/used</b>
                  <ul>
                    <li>Go</li>
                    <li>Twitch API</li>
                    <li>Web Scraping</li>
                    <li>
                      CLI creation using{" "}
                      <a
                        href="https://github.com/spf13/cobra"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cobra
                      </a>
                    </li>
                    <li>Git tagging</li>
                    <li>
                      <a
                        href="https://github.com/JonathanGzzBen/streamerslive/releases/latest"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Releasing on Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://pkg.go.dev/github.com/JonathanGzzBen/streamerslive"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Releasing Go package
                      </a>
                    </li>
                  </ul>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
};

export default Projects;
