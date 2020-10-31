import React, { Component } from 'react';
import './Projects.css';
import ReactPlayer from 'react-player';


class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
            <h2 className="projectsH2">Projects</h2>
            <ReactPlayer url="https://youtu.be/FPe3gaOlHdg" className="projectVideo"/>
            <h3 className="projectsH3">Click! Metronome App</h3>
            <p className="projectsCard">
              Musician and marketing professional turned software developer. 
              I'm a creative individual with a passion for technology. 
              When I'm not geeking out on the newest effects pedals or building apps, 
              you can find me playing with one of my bands, making food with my wife, 
              or cheering on one of the many (usually disappointing) Minnesota sports teams. 
            </p>

      </div>
    );
  }
}

export default Projects;