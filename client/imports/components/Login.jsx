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

  loginUser() {
    const username = this.state.username;
    const password = this.state.password;

    console.log(this.state.username, this.state.password);
    Meteor.loginWithPassword(username, password, (err, success) => {
      if (!err) {
        this.props.setUser();
      }
    });
  }

  render() {
    return (
      <div>
        <section className="login-container">
          <img alt="Ronald McDonald House Charities logo"
            width="178"
            src="images/rmhc-logo.png"
            className="center"
          />
          <img alt="Ronald McDonald Care Mobile "
            width="280"
            src="images/care-mobile-logo.png"
            className="center care-mobile-logo"
          />
          <div className="w-form">
              <label htmlFor="UserName">
                User Name:
              </label>
              <input id="UserName"
                onBlur={this.setUsername.bind(this)}
                type="email"
                placeholder="Enter your User Name"
                name="UserName"
                data-name="UserName"
                required="required"
                className="w-input" />
              <label htmlFor="Password">
                Password:
              </label>
              <input id="Password"
                onBlur={this.setPassword.bind(this)}
                type="text"
                placeholder="Enter your Password"
                name="Password"
                data-name="Password"
                required="required"
                className="w-input" />
              <input type="submit"
                onClick={this.loginUser.bind(this)}
                value="Submit"
                data-wait="Please wait..."
                className="w-button btn primary-btn-color full-btn" />
          </div>
        </section>
      </div>
      );
  }
}
;
