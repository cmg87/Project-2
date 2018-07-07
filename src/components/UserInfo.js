import React, { Component } from 'react';
import UserForm5 from '../components/UserForm5';

class UserInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="well">
              <UserForm5 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;