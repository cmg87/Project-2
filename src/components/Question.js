import React, { Component } from 'react';
import ParseQ from '../components/ParseQ';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: null,
            current: 1,
            answers: {
                "BOOKS1":0
            }
        };
    }

    componentWillMount() {
        fetch('/api/questions')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                this.setState({ survey: data });
            });
    }
    
    render() {
        if (!this.state.survey) {
            return <div>No fetched data</div>
        }
        return (
            <div>
                <ParseQ current={this.state.current} survey={this.state.survey} answers={Object.entries(this.state.answers)} />
            </div>
        );
    }
}

export default Question;