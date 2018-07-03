import React, { Component } from 'react';
import { PanelGroup } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const buttonStyle = {
  float: 'right'
};

class Panels extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        activeKey: '1'
      };
    }
  
    handleSelect(activeKey) {
      this.setState({ activeKey });
    }

    render() {
      return (
        <div>
          <PanelGroup
            accordion
            id="accordion-controlled-example"
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Panel eventKey="1">
              <Panel.Heading>
                <Panel.Title toggle>{this.props.title}</Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                {this.props.summary}
                <br />
                <br />
                <Button className="btn" style={buttonStyle} href="/#/survey">Go</Button>
              </Panel.Body>
            </Panel>
          </PanelGroup>
        </div>
      );
    }
  }
  
  export default Panels;
