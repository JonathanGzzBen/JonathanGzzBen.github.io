import React from "react";
import "../styles/App.css";
import "bootstrap/scss/bootstrap.scss";
import "../styles/jonathan_theme.scss";
import { Container, Image } from "react-bootstrap";
import NavBar from "./NavBar";
import { Element, scroller } from "react-scroll";
import logo from "../images/personal_logo.png";
import About from "./sections/About";
import Education from "./sections/Education";
import Languages from "./sections/Languages";
import Contact from "./sections/Contact";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSectionClick = this.handleSectionClick.bind(this);
    this.state = {};
    this.AboutSectionName = "about";
    this.EducationSectionName = "education";
    this.LanguagesSectionName = "language";
    this.ContactSectionName = "contact";
  }

  handleSectionClick(sectionName) {
    scroller.scrollTo(sectionName, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  }

  render() {
    return (
      <div>
        <NavBar
          onAboutClick={() => this.handleSectionClick(this.AboutSectionName)}
          onEducationClick={() =>
            this.handleSectionClick(this.EducationSectionName)
          }
          onLanguagesClick={() =>
            this.handleSectionClick(this.LanguagesSectionName)
          }
          onContactClick={() =>
            this.handleSectionClick(this.ContactSectionName)
          }
        />
        <Container>
          <div className="text-center pt-4">
            <Image src={logo} fluid alt="JonathanGzz Logo" />
          </div>
          <Element name={this.AboutSectionName}>
            <About />
          </Element>
          <Element name={this.EducationSectionName}>
            <Education />
          </Element>
          <Element name={this.LanguagesSectionName}>
            <Languages />
          </Element>
          <Element name={this.ContactSectionName}>
            <Contact />
          </Element>
        </Container>
      </div>
    );
  }
}

export default App;
