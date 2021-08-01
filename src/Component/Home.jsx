import React, { Component } from 'react';
import homeImage from '../Assets/home.png';
import '../Styles/Home.css';

class Home extends Component {
  render() {
    return (
      <section className='home-container' id='home'>
        <section className='info-container'>
          <h1>Johne Alves</h1>
          <h2><span className='linha-vertical'/>Full-stack Developer</h2>
          <p>
            Este é o meu portifolio onde exponho meus pricipais trabalhos e meu amor pela programação.<br/>
          </p>
          <div>
            <a href="https://www.linkedin.com/in/johne-alves/"  target="_blank" rel="noreferrer">
              <button>LinkedIn</button>
            </a>
            <a href="https://github.com/johnealves" target="_blank" rel="noreferrer">
              <button className="btn">GitHub</button>
            </a>
          </div>
        </section>
        <section className="image-home">
            <img className="image-top" src={ homeImage } alt={ 'imagem-principal' } />
        </section>
      </section>
    );
  }
}

export default Home;
