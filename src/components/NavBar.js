import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  const [activeLink, setActiveLinked] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrolled);
    return () => {
      window.removeEventListener("scroll", scrolled);
    };
  });

  const updateActiveLink = (linkName) => {
    setActiveLinked(linkName);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={"navbar-link " + activeLink === "home" ? "active" : ""}
              onClick={() => updateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                "navbar-link " + activeLink === "skills" ? "active" : ""
              }
              onClick={() => updateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                "navbar-link " + activeLink === "experience" ? "active" : ""
              }
              onClick={() => updateActiveLink("experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                "navbar-link " + activeLink === "projects" ? "active" : ""
              }
              onClick={() => updateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
