import React, { Component } from 'react';

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">
                  <img className="nav-logo" src="assets/images/brand-logo-kwiri.png">
                </a>
              </div>
        
              <!-- Collect the nav links, forms, and other content for toggling -->
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
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
          </nav>
        )
    }
}