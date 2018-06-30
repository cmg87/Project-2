import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <img className="nav-logo" src="assets/images/brand-logo-kwiri.png" alt="nav" />
                </a>
              </div>
        
              {/* Collect the nav links, forms, and other content for toggling */} 
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/survey">Survey</a>
                  </li>
                  <li>
                    <a href="/results">Results</a>
                  </li>
                  <li>
                      <a href="/about">About</a>
                  </li>
                </ul>
              </div>
            {/*/.navbar-collapse*/} 
            </div>
            {/* /.container-fluid */} 
          </nav>
        )
    }
}

export default NavBar;