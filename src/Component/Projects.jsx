import React, { Component } from 'react';
import projectList from '../data';
import { FcNext, FcPrevious } from 'react-icons/fc';
import '../Styles/Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.nextProject = this.nextProject.bind(this);
    this.previousProject = this.previousProject.bind(this);

    this.state = {
      index: 0,
    }
  }

  nextProject() {
    const { index } = this.state;
    if (index === (projectList.length - 1)) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: index + 1 })
    }
  }

  previousProject() {
    const { index } = this.state;
    if ( index === 0) {
      this.setState({ index: (projectList.length - 1) })
    } else {
      this.setState({ index: index - 1 })
    }
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <h1 className="title-page">My Projects</h1>
        <div className="list-project-container">
        <button
          className="btn-list"
          onClick={ this.previousProject }
        >
          <FcPrevious />
        </button>
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
          ))[index]}
        <button
          className="btn-list"
          onClick={ this.nextProject }
        >
          <FcNext />
        </button>
        </div>
      </div>
    );
  }
}

export default Projects;