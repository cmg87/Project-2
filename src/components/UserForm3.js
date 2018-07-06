import React, { Component } from 'react';

class UserForm3 extends Component {
  send() {
    // HELPFUL RESOURCE: https://codepen.io/agconti/pen/GmewbO
    const method = "POST";
    const body = new FormData(this.form);
    fetch("https://httpbin.org/post", { method, body })
      .then(res => res.json())
      .then(data => alert(JSON.stringify(data, null, "\t")));
  }
  render() {
    return (
      <div>
        <form ref={el => (this.form = el)}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" value="blah" />
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" value="blah@blah" />
          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" value="blah" />
        </form>
        <button onClick={() => this.send()}>Send</button>
        <p>Submit me to see what I send to the server.</p>
      </div>
    );
  }
}

export default UserForm3;