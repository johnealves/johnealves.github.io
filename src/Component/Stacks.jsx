import React, { Component } from 'react';
import { SiGnubash, SiHtml5, SiGit, SiCss3, SiJavascript, SiReact, SiRedux, SiJest } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc'
import { GiGoat } from 'react-icons/gi'
import '../Styles/stacks.css';

class Stacks extends Component {
  render() {
    return (
      <div className="stack-container">
        <h1 className="title-page">My Stacks</h1>
        <ul className="stack-list-container">
          <li><span><SiGnubash /></span>Unix & bash</li>
          <li><span><SiGit /></span>Git & GitHub</li>
          <li><span><SiHtml5 /></span>Html 5</li>
          <li><span><SiCss3 /></span>CSS 3</li>
          <li><span><SiJavascript /></span>JavaScript</li>
          <li><span><SiReact /></span>Reacj.js</li>
          <li><span><SiRedux /></span>Redux</li>
          <li><span><VscJson /></span>Requisições API Rest</li>
          <li><span><SiJest /></span>Jest</li>
          <li><span><GiGoat /></span>React Testing Library</li>
        </ul>
      </div>
    );
  }
}

export default Stacks;