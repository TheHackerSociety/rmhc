import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  setUsername(e) {
    const username = e.target.value;
    this.setState({ username });
  }

  setPassword(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  //checkEnter(e) {
      //console.log('login')
    //if (e.key === 'Enter' && this.state.username && this.state.password) {
      ////this.loginUser();
    //}
  //}

  loginUser() {
    const username = this.state.username;
    const password = this.state.password;

    console.log(this.state.username, this.state.password);
    Meteor.loginWithPassword(username, password, (err, success) => {
      if (!err) {
        this.props.setUser()
      }
    });
  }

  render() {
    return (
      <div>
        <br />
        username:
        <input
          onBlur={this.setUsername.bind(this)}
        />
        <br />
        <br />
        password:
        <input
          onBlur={this.setPassword.bind(this)}
        />
        <br />
        <br />
        <button onClick={this.loginUser.bind(this)}>LOGIN</button>
      </div>
    );
  }
}
