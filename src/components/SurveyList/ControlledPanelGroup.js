import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const buttonStyle = {
  float: 'right'
};

class Panels extends Component {
    render() {
      return (
        <div>
            <Panel className="panel panel-default listedPanel">
                <Panel.Heading className="listedHeading">
                    <Panel.Title className="listedTitle">{this.props.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body className="listedBody">
                    {this.props.summary}
                    <br />
                    <br />
                    <Button className="btn" style={buttonStyle} href="/#/survey">Begin This Survey</Button>
                </Panel.Body>
            </Panel>          
        </div>
      );
    }
  }
  
  export default Panels;
