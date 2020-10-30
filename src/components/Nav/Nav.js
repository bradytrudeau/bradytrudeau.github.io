import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
    Link,
  } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
        <Router>
            <div className="nav">
                <h2 className="nav-title">Brady Trudeau</h2>
                <div className="nav-right">
                <Link 
                    className="nav-link">
                        ABOUT
                </Link>
                <Link 
                    className="nav-link">
                        PROJECTS
                </Link>
                <Link 
                    className="nav-link">
                        CONTACT
                </Link>
                </div>
            </div>
        </Router>
    );
  }
}

export default Nav;
