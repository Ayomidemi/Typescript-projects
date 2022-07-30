import * as React from "react";

import resume from "../img/resume.pdf";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  const [click, setClick] = React.useState(false);

  const scrollTo = (id: string) => {
    let element: any = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <>
      <Navbar fixed="top" className="navbarr" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            href="/"
            style={{
              fontWeight: "bolder",
              color: "#b621fe",
              fontSize: "larger",
            }}
          >
            PEASE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav.Link onClick={() => scrollTo("home")} className="text-white">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => scrollTo("skills")} className="text-white">
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollTo("projects")}
              className="text-white"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollTo("contact")}
              className="text-white"
            >
              Contact
            </Nav.Link>

            <div>
              <a
                href="https://www.linkedin.com/in/peace-adeniji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="social-icons" />
              </a>
              <a
                href="https://twitter.com/Pease_xoxo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icons" />
              </a>
              <a
                href="https://github.com/Ayomidemi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icons" />
              </a>
            </div>

            <a href={resume} download>
              <Button variant="outline-light" style={{ fontWeight: "bolder" }}>
                Download CV
              </Button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
