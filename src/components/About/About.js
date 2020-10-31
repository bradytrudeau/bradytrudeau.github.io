import React, { Component } from 'react';
import './About.css';
import family from '../../Images/family.png';

class About extends Component {
  render() {
    return (
          <div id="about" className="about">
                <h2 className="aboutH2">About</h2>
                <img src={family} className="familyPhoto"></img>
                <p className="aboutCard">
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

export default About;