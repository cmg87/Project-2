import React, { Component } from 'react';
import CurrentQ from './CurrentQ';

class ParseQ extends Component {
    render() {
        const survey = this.props.survey;
        const current = this.props.current;
        const keys = Object.keys(survey[1]);
        const code = (keys[current-1]);
        const qBody = survey[1]['WEB1'];
        console.log(qBody);
        let choices = [];

        // Turn answers array back into an object
        let answersRaw = this.props.answers;
        let answers = answersRaw.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{});

        // CONDITIONS
        // If conditions exist
        if (qBody.conditions) {
            // Save relation & conditions keys
            let relation = qBody.conditions['relation'];
            let conditionKeys = Object.keys(qBody.conditions);

            if (relation == 'or') {
                for(let i=0;i<(conditionKeys.length - 1);i++) {
                    // If answer exists
                    if (answers[conditionKeys[i]]) {
                        // If conditional check fails
                        if (answers[conditionKeys[i]] !== qBody.conditions[conditionKeys[i]]) {
                            //
                            // Code to skip question
                            // nextQuestion();
                            //
                            console.log("Skip question");
                        }
                    }
                }
            }
            if (relation == 'greater than') {
                for(let i=0;i<(conditionKeys.length - 1);i++) {
                    // If answer exists
                    if (answers[conditionKeys[i]] >= 0) {
                        console.log('check');
                        // If conditional check fails
                        if (answers[conditionKeys[i]] <= qBody.conditions[conditionKeys[i]]) {
                            //
                            // Code to skip question
                            // nextQuestion();
                            //
                            console.log("Skip question");
                        }
                    }
                }
            }
        }

        // TYPES
        if (qBody.type == 'multi') {
            return (
                <CurrentQ number={this.props.current} code={code} type="multi" text={qBody.text} choices={Object.entries(qBody.choices)} />
            )
        }

        if (qBody.type == 'number') {
            return (
                <CurrentQ number={this.props.current} code={code} type="number" text={qBody.text} />
            )
        }

        if (qBody.type == 'multi-sub') {
            return (
                <CurrentQ number={this.props.current} code={code} type="multi-sub" text={qBody.text} choices={Object.entries(qBody.choices)} subChoices={Object.entries(qBody.sub_choices)} />
            )
        }

        return(
           <div>Question type check fail</div>
        );
    }


}

export default ParseQ;