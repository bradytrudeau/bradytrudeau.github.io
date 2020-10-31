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
            I've been a musician for as long as I can remember. 
            As a musician, I've used hundreds of different tools to help hone my craft. 
            Of all of these tools, the most important has been the metronome. 
            I've used dozens of different kinds of metronomes, 
            but have always had an issue with their inability to save a list of tempos for quickly recalling them 
            and the limited number of sound options they have. 
            For this reason, I've created the Click! Metronome App. Enjoy!
            </p>

      </div>
    );
  }
}

export default Projects;