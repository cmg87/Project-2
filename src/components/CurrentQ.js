import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const buttonStyle = {
  margin: '0 auto',
  textAlign: 'center'
};

class CurrentQ extends Component {
    constructor(props) {
        super(props);
        // this.createChoices = this.createChoices.bind(this);
        // this.createChoicesSub = this.createChoicesSub.bind(this);
        this.submitMulti = this.submitMulti.bind(this);
        this.submitNumber = this.submitNumber.bind(this);
        this.submitMultiSub = this.submitMultiSub.bind(this);
        this.sendAnswer = this.sendAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    createChoices() {
        let choicesBuild = [];
        for (let i=0;i<this.props.choices.length;i++) {
            choicesBuild.push(<Button onClick={(e) => this.submitMulti(this.props.choices[i][0], e)} bsStyle="primary" value={this.props.choices[i][0]} id={this.props.choices[i][1]} key={i}>{this.props.choices[i][1]}</Button>);
        }
        return <div style={buttonStyle}>{choicesBuild}</div>
    }

    createChoicesSub() {
        let choicesBuild = [];
        let subChoices = [];
        let subColumns = [];
        let alpha = 'abcdefghijklmnopqrstuvwxyz'

        // Build table headers
        for (let i=0;i<this.props.choices.length;i++) {
            choicesBuild.push(<th key={i}>{this.props.choices[i][1]}</th>)
        }

        // Build choice groups
        for (let j=0;j<this.props.subChoices.length;j++) {
            let id = "answer"+(j+1);
            subChoices.push(<div className="radio" key={j}><label><input type="radio" name="optionsRadios" id={id}  value={this.props.subChoices[j][0]} />{this.props.subChoices[j][1]}</label></div>);
        }

        // Build choice columns
        for (let k=0;k<this.props.choices.length;k++) {
            subColumns.push(<td key={k}><form id={alpha[k]}>{subChoices}</form></td>);
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        {choicesBuild}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {subColumns}
                    </tr>
                </tbody>
            </table>
        )

    }

    submitMulti(value) {
        let answer = {};
        answer[this.props.code] = value;
        console.log(answer);
        this.sendAnswer(answer);
        this.nextQuestion();
    }

    submitNumber() {
        let answer = {};
        let value = document.getElementById("answerInput").value;
        answer[this.props.code] = value;
        console.log(value);
        this.sendAnswer(answer);
        this.nextQuestion();
    }

    submitMultiSub() {
        let alpha = 'abcdefghijklmnopqrstuvwxyz'
        let code = this.props.code;
        let answer = {};
        let forms = document.forms

        // For each choice
        for (let i=0;i<this.props.choices.length;i++) {
            // For each subchoice of each choice
            for (let j=0;j<this.props.subChoices.length;j++) {

                let subchoice = 'answer'+(j+1);

                // If radio button checked, push info to answers
                if (forms[alpha[i]].elements[subchoice].checked) {
                    answer[code+alpha[i]] = forms[alpha[i]].elements[subchoice].value;
                }
            }
        }
        console.log(answer);
        this.sendAnswer(answer);
        this.nextQuestion();
    }

    sendAnswer(answer) {
        this.props.updateAnswers(answer);
    }

    nextQuestion() {
        this.props.nextQuestion();
    }

    render() {
        if (this.props.type === 'multi') {
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

        if (this.props.type === 'number') {
            return(
            <Panel className="panel panel-default">
                <Panel.Heading>
                    <Panel.Title>Question {this.props.number}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {this.props.text}
                    <br />
                    <br />
                    <input type="number" className="form-control" id="answerInput" placeholder="Enter number here" />
                    <br />
                    <br />
                    <Button bsStyle="primary" onClick={this.submitNumber}>Submit</Button>
                </Panel.Body>
            </Panel>
            )
        }


        if (this.props.type === 'multi-sub') {
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
                    <div style={buttonStyle}><Button bsStyle="primary" onClick={this.submitMultiSub}>Submit</Button></div>
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