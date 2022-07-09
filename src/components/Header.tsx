import * as React from "react";
import Typewriter from "typewriter-effect";
import pease from "../img/pease.png";
import { FaArrowRight } from "react-icons/fa";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <div className="header-container">
        <div className="header-flex">
          <div className="header-flex-box">
            <button className="header-button">Welcome to my portfolio</button>

            <h1 style={{ margin: "1rem 0" }}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span class="typewrite-1"> Hi! I’m Pease Adeniji, A Frontend Developer. </span>'
                    )
                    .pauseFor(2000)
                    .deleteAll()
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </h1>
            <h4 style={{ fontWeight: "lighter" }}>
              I'm a Front-End Developer in Lagos, Nigeria. I have a dedicated
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences. Welcome to my space and let's make something
              special!
            </h4>
            <h3 style={{ margin: "1rem 0" }}>
              Let's Connect
              <a
                href="https://www.linkedin.com/in/peace-adeniji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArrowRight className="social-icons" style={{marginLeft: '1rem'}}/>
              </a>
            </h3>
          </div>

          <div className="header-flex-box">
            <img src={pease} alt="Pease" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
