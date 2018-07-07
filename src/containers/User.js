import React, { Component } from 'react';
import UserInfo from '../components/UserInfo';

class User extends Component {
    render() {
        return (
            <div id="surveyContainer" className="container">
                <UserInfo />
            </div>
        );
    }
}

export default User;