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

  loginUser() {
    const { username, password } = this.state;

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        alert('wrong password');
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
                onBlur={(e) => this.setState({ username: e.target.value })}
                type="text"
                placeholder="Enter your User Name"
                name="UserName"
                data-name="UserName"
                required="required"
                className="w-input" />
              <label htmlFor="Password">
                Password:
              </label>
              <input id="Password"
                onBlur={(e) => this.setState({ password: e.target.value })}
                type="password"
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

