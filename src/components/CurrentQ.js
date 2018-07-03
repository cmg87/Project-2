import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

const buttonStyle = {
  margin: '0 auto',
  textAlign: 'center'
};

class CurrentQ extends Component {
    constructor(props) {
        super(props);
        this.createChoices = this.createChoices.bind(this);
        this.createChoicesSub = this.createChoicesSub.bind(this);
    }

    createChoices() {
        let choicesBuild = '';
        for (let i=0;i<this.props.choices.length;i++) {
            choicesBuild += '<Button class="btn btn-primary" value="'+this.props.choices[i][0]+'">'+this.props.choices[i][1]+'</Button>';
        }
        return <div style={buttonStyle} dangerouslySetInnerHTML={{__html: choicesBuild}}></div>
    }

    createChoicesSub() {
        let choicesBuild = '';
        let subChoices = '';

        subChoices += '<td><form>'
        for (let j=0;j<this.props.subChoices.length;j++) {
            subChoices += '<div class="radio"><label><input type="radio" name="optionsRadios" id="optionsRadios'+(j+1)+'"  value="'+this.props.subChoices[j][0]+'">'+this.props.subChoices[j][1]+'</label></div><br />'
        }
        subChoices += '</form></td>'

        choicesBuild += '<thead><tr>'
        for (let i=0;i<this.props.choices.length;i++) {
            choicesBuild += '<th>'+this.props.choices[i][1]+'</th>'
        }
        choicesBuild +='</tr></thead><tbody>';
        choicesBuild += '<tr>'
        for (let i=0;i<this.props.choices.length;i++) {
            choicesBuild += subChoices;
        }
        choicesBuild += '</tr>'
        
        choicesBuild += '</tbody>';
        return <table class="table" dangerouslySetInnerHTML={{__html: choicesBuild}}></table>;
    }

    render() {
        if (this.props.type == 'multi') {
            return(
            <Panel className="panel panel-default">
                <Panel.Heading>
                    <Panel.Title>Question {this.props.number}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {this.props.text}
                    <br />
                    <br />
                    {this.createChoices()}
                </Panel.Body>
            </Panel>
            );
        }

        if (this.props.type == 'number') {
            return(
            <Panel className="panel panel-default">
                <Panel.Heading>
                    <Panel.Title>Question {this.props.number}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {this.props.text}
                    <br />
                    <br />
                    <input type="number" class="form-control" id="answerInput" placeholder="Enter number here" />
                    <br />
                    <br />
                    <Button bsStyle="primary">Submit</Button>
                </Panel.Body>
            </Panel>
            )
        }

        if (this.props.type == 'multi-sub') {
            return(
            <Panel className="panel panel-default">
                <Panel.Heading>
                    <Panel.Title>Question {this.props.number}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {this.props.text}
                    <br />
                    <br />
                    {this.createChoicesSub()}
                    <br />
                    <div style={buttonStyle}><Button bsStyle="primary">Submit</Button></div>
                </Panel.Body>
            </Panel>
            );
        }

        return(
            <div>Type evaluation failed</div>
        );
    }
}


export default CurrentQ;