import React, { Component } from 'react';
import Panels from './ControlledPanelGroup';
const res = {
    title: "Internet Core Trends Survey",
    summary: "This survey contains questions about social media use in 2018 and attitudes toward the internet and whether Americans think it's good or bad for society."
}

class SurveyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            title: res.title,
            summary: res.summary
        };
    }
    
    render() {
        return (
            <Panels title={this.state.title} summary={this.state.summary} />
        );
    }
}

export default SurveyList;