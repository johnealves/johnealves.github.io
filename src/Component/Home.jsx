import React, { Component } from 'react';
import homeImage from '../Assets/home.png';
import '../Styles/Home.css';

class Home extends Component {
  render() {
    return (
      <section className='home-container' id='home'>
        <section className='info-container'>
          <h1>Johne Alves</h1>
          <h2><span className='linha-vertical'/>Front-end Developer</h2>
          <p>Welcome to my world. This is where I show all my experience and passion for development.</p>
          <div>
            <a href="https://www.linkedin.com/in/johne-alves/"  target="_blank" rel="noreferrer">
              <button>LinkedIn</button>
            </a>
            <a href="https://github.com/johnealves" target="_blank" rel="noreferrer">
              <button className="btn">GitHub</button>
            </a>
          </div>
        </section>
        <section className="image">
            <img className="image-top" src={ homeImage } alt={ 'imagem-principal' } />
        </section>
      </section>
    );
  }
}

export default Home;