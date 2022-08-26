import * as React from "react";
import { GiCheckMark } from "react-icons/gi";

interface ISkillsProps {}

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  return (
    <div className="skills" id="skills">
      <div className="skills-cntained">
        <div className="skills-container">
          <div className="skills-title">
            <h1 className="skills-title-h1">Skills</h1>
            <h3>
              My expertise is in the area of responsive design. With every line
              of code, I strive to make the web a beautiful place. Welcome to my
              space and check out my skills below!
            </h3>

            <div className="carousel">
              <div className="skills-carousel">
                <div className="rounded">
                  <div className="circle">
                    <GiCheckMark className="skills-icon" />
                  </div>
                </div>
                <h3>JavaScript</h3>
              </div>
              <div className="skills-carousel">
                <div className="rounded">
                  <div className="circle">
                    <GiCheckMark className="skills-icon" />
                  </div>
                </div>
                <h3>TypeScript</h3>
              </div>
              <div className="skills-carousel">
                <div className="rounded">
                  <div className="circle">
                    <GiCheckMark className="skills-icon" />
                  </div>
                </div>
                <h3>React JS</h3>
              </div>
            </div>

            <div className="carousel">
              <div className="skills-carousel">
                <div className="rounded">
                  <div className="circle">
                    <GiCheckMark className="skills-icon" />
                  </div>
                </div>
                <h3> SCSS </h3>
              </div>
              <div className="skills-carousel">
                <div className="rounded">
                  <div className="circle">
                    <GiCheckMark className="skills-icon" />
                  </div>
                </div>
                <h3>APIs</h3>
              </div>
              <div className="skills-carousel">
                <div className="rounded">
                  <div className="circle">
                    <GiCheckMark className="skills-icon" />
                  </div>
                </div>
                <h3> Redux</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
