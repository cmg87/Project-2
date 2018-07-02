import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Survey from './containers/Survey';
import Results from './containers/Results';


class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className="content">
          <NavBar />
            <Route exact path="/" component={Home}/>
            <Route path="/survey" component={Survey}/>
            <Route path="/results" component={Results}/>
          </div>
        </HashRouter>
    );
  }
}

export default App;
