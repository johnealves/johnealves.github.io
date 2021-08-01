import React, { Component } from 'react';
import { 
  SiGnubash,
  SiHtml5,
  SiGit,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiJest,
  SiNodeDotJs,
  SiMongodb,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc'
import { GrMysql } from 'react-icons/gr'
import '../Styles/stacks.css';

function Stacks() {
  return (
    <div className="stack-container">
      <h1 className="title-page">DevTools</h1>
      <div className="stack-list-container">
        <div className="stack-card">
          <SiGit className="icon" color='#e94e31'/>
          Git & Github
        </div>
        <div className="stack-card">
          <SiHtml5 className="icon" color='#f06529'/>
          Html 5
        </div>
        <div className="stack-card">
          <SiCss3 className="icon" color="#1e90ff" />CSS 3
        </div>
        <div className="stack-card">
          <SiJavascript className="icon" color="#f7df1e" />JavaScript
        </div>
        <div className="stack-card">
          <SiReact className="icon" color="#61dafb" />Reacj.js
        </div>
        <div className="stack-card">
          <SiRedux className="icon" color="#764abc" />Redux
        </div>
        <div className="stack-card">
          <SiNodeDotJs className="icon" color="#8CBF3D" />Node.js
        </div>
        <div className="stack-card">
          <GrMysql className="icon" color="#1D4A65" />MySQL
        </div>
        <div className="stack-card">
          <SiMongodb className="icon" color="#4E9144" />MongoDB
        </div>
      </div>
    </div>
  );
}

export default Stacks;