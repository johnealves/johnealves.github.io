import React, { Component } from 'react';
import '../Styles/Projects.css';
import SimpleSlider from './SimpleSlider';

class Projects extends Component {
  render() {

    return (
      <div className="projects-container">
        <h1 className="title-page">My Projects</h1>
        <div className="slider-container">
          <SimpleSlider />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-lone-blocks
{/* <div className="list-project-container">
  { projectList.map((project) => (
    <div className="project-container">
      <div className="project-image">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img src={ project.image } alt={ `imagem ${ project.name }` }/>
        </a>
      </div>
      <div className="project-info">
        <h1>
          <a href={project.link} target="_blank" rel="noreferrer">
            { project.name }
          </a>
        </h1>
        <p>{ project.description }</p>
      </div>
    </div>
  ))}
</div> */}
export default Projects;