import React from "react";
import "../styles/App.css";
import "bootstrap/scss/bootstrap.scss";
import "../styles/jonathan_theme.scss";
import { Container, Image } from "react-bootstrap";
import NavBar from "./NavBar";
import { Element, scroller, animateScroll as scroll } from "react-scroll";
import logo from "../images/personal_logo.png";
import About from "./sections/About";
import Education from "./sections/Education";
import Languages from "./sections/Languages";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSectionClick = this.handleSectionClick.bind(this);
    this.state = {};
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
    const getSectionObject = (name, component) => ({
      name: name,
      component: component,
      onClick: () => this.handleSectionClick(name),
    });

    const sections = [
      getSectionObject("About", <About />),
      getSectionObject("Education", <Education />),
      getSectionObject("Languages", <Languages />),
      getSectionObject("Skills", <Skills />),
      getSectionObject("Projects", <Projects />),
      getSectionObject("Contact", <Contact />),
    ];

    const sectionElements = sections.map((section, index) => {
      return (
        <Element name={section.name} key={index}>
          {section.component}
        </Element>
      );
    });

    return (
      <div>
        <NavBar sections={sections} onBrandClick={() => scroll.scrollToTop()} />
        <Container className="pb-3">
          <div className="text-center pt-4">
            <header>
              <Image src={logo} fluid alt="JonathanGzz Logo" />
              <h4 className="pt-2">
                Hello, my name is Jonathan González. I am a software developer
                and software engineering student.
                <br />I enjoy learning and improving by building useful things.
              </h4>
              <h4 className="pt-4">
                <a
                  href="JonathanGzzBenResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge badge-secondary p-3"
                >
                  Get a copy of my resume
                </a>
              </h4>
            </header>
          </div>
          {sectionElements}
        </Container>
      </div>
    );
  }
}

export default App;
