import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import projects from "../models/projects";
import live from "../models/live";
import react from "../models/react";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  const [key, setKey] = React.useState("all-projects");

  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        <h1 className="skills-title-h1" style={{margin: '3rem 0'}}>Projects</h1>

        <div className="project-tabs">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            className="tabs-class nav-tabs nav"
          >
            <Tab eventKey="all-projects" title="All Projects" className='nav-link'>
              <div className="projects">
                <div className="all-projects-container">
                  {projects.map((project, i) => {
                    return (
                      <div className="ap-image-container">
                        <img src={project.image} alt="Pease" />
                        <div className="ap-image-hover">
                          <h3 style={{marginBottom: '2rem', textAlign: 'center'}}>{project.title}</h3>
                          <a href={project.link1} 
                          target="_blank"
                          rel="noopener noreferrer">{project.icon1}</a>
                          <a href={project.link2} target="_blank"
                rel="noopener noreferrer">{project.icon2}</a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tab>

            <Tab eventKey="live-sites" title="Live Sites" className='nav-link'>
              <div className="projects">
                <div className="all-projects-container">
                  {live.map((project, i) => {
                    return (
                      <div className="ap-image-container" style={{marginRight: '3rem'}}>
                        <img src={project.image} alt="Pease" />
                        <div className="ap-image-hover">
                        <h3 style={{marginBottom: '2rem', textAlign: 'center'}}>{project.title}</h3>
                          <a href={project.link1} target="_blank"
                rel="noopener noreferrer">{project.icon1}</a>
                          <a href={project.link2} target="_blank"
                rel="noopener noreferrer">{project.icon2}</a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tab>

            <Tab eventKey="react" title="React JS & TypeScript" className='nav-link'>
              <div className="projects">
                <div className="all-projects-container">
                  {react.map((project, i) => {
                    return (
                      <div className="ap-image-container">
                        <img src={project.image} alt="Pease" />
                        <div className="ap-image-hover">
                        <h3 style={{marginBottom: '2rem', textAlign: 'center'}}>{project.title}</h3>
                          <a href={project.link1} target="_blank"
                rel="noopener noreferrer">{project.icon1}</a>
                          <a href={project.link2} target="_blank"
                rel="noopener noreferrer">{project.icon2}</a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
