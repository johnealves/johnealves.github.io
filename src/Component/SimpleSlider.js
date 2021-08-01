import React, { Component } from "react";
import Slider from "react-slick";
import projectList from "../data";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        { projectList.map((project) => (
          <div className="project-container">
            <div className="project-image">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={ project.image } alt={ `imagem ${ project.name }` }/>
              </a>
              <div className="project-info">
                <h1>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    { project.name }
                  </a>
                </h1>
                <p>{ project.description }</p>
              </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    );
  }
}