import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
          <div>
          <Nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <Button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </Button>
              <a className="navbar-brand" href="/">
                <img className="nav-logo" src="./assets/images/brand-logo-kwiri.png" alt="Kwiri"/>
              </a>
            </div>
      
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/survey">Survey</NavLink>
                </li>
                <li>
                  <NavLink to="/results">Results</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
        </div>
        )
    }
}

export default NavBar;