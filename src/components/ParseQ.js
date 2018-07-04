import React, { Component } from 'react';
import CurrentQ from './CurrentQ';

class ParseQ extends Component {
    constructor(props) {
        super(props);
        this.updateAnswers = this.updateAnswers.bind(this);
    }

    componentWillMount() {
        
    }

    updateAnswers(answer) {
        this.props.updateAnswers(answer);       
    }

    render() {
        const survey = this.props.survey;
        const current = this.props.current;
        const keys = Object.keys(survey[1]);
        const code = (keys[current-1]);
        const qBody = survey[1][code];
        const total = this.props.total;

        // Turn answers array back into an object
        let answersRaw = this.props.answers;
        let answers = answersRaw.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{});

        // END OF SURVEY CHECK
        if (current > total) {
            this.props.endSurvey();
        }

        // CONDITIONS
        // If conditions exist
        console.log(code);
        console.log(qBody);
        if (qBody.conditions) {
            // Save relation & conditions keys
            let relation = qBody.conditions['relation'];
            let conditionKeys = Object.keys(qBody.conditions);

            if (relation === 'or') {
                console.log(conditionKeys.length - 1);

                for(let i=0;i<(conditionKeys.length - 1);i++) {
                    // If answer exists
                    console.log(answers);
                    console.log(code);
                    console.log(answers[conditionKeys[i]]);
                    console.log(qBody.conditions[conditionKeys[i]]);
                    if (answers[conditionKeys[i]]) {
                        // If conditional check fails
                        if (answers[conditionKeys[i]] !== qBody.conditions[conditionKeys[i]]) {
                            this.props.nextQuestion();
                            console.log("Skip question");
                            break;
                        }
                    }
                }
            }
            if (relation === 'greater than') {
                for(let i=0;i<(conditionKeys.length - 1);i++) {
                    // If answer exists
                    if (answers[conditionKeys[i]] >= 0) {
                        console.log('check');
                        // If conditional check fails
                        if (answers[conditionKeys[i]] <= qBody.conditions[conditionKeys[i]]) {
                            this.props.nextQuestion();
                            console.log("Skip question");
                            break;
                        }
                    }
                }
            }
        }

        // TYPES
        if (qBody.type === 'multi') {
            return (
                <CurrentQ number={this.props.current} code={code} type="multi" text={qBody.text} choices={Object.entries(qBody.choices)} updateAnswers={this.props.updateAnswers} nextQuestion={this.props.nextQuestion} />
            )
        }

        if (qBody.type === 'number') {
            return (
                <CurrentQ number={this.props.current} code={code} type="number" text={qBody.text} updateAnswers={this.props.updateAnswers} nextQuestion={this.props.nextQuestion} />
            )
        }

        if (qBody.type === 'multi-sub') {
            return (
                <CurrentQ number={this.props.current} code={code} type="multi-sub" text={qBody.text} choices={Object.entries(qBody.choices)} subChoices={Object.entries(qBody.sub_choices)} updateAnswers={this.props.updateAnswers} nextQuestion={this.props.nextQuestion}/>
            )
        }

        return(
           <div>Question type check fail</div>
        );
    }


}

export default ParseQ;