import * as React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
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
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/skills" className="text-white">
              Skills
            </Nav.Link>
            <Nav.Link href="/projects" className="text-white">
              Projects
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

            <Button variant="outline-light">
              <a
                href="https://www.linkedin.com/in/peace-adeniji"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Connect
              </a>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
