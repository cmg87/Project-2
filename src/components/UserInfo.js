import React, { Component } from 'react';
import UserForm3 from '../components/UserForm3';

class UserInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="well">
              <UserForm3 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;