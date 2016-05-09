import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getMyInitialState();
  }

  getMyInitialState() {
    return {
      username: null,
      password: null,
    };
  }
  submit(e) {
    e.preventDefault();
    const { username, password } = this.state;

    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        alert('Wrong username or password');
      }
    });
    this.setState(this.getMyInitialState());
  }

  render() {
    return (
      <div>
        <section className="w-form form-wrapper" className="login-container">
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
          <form onSubmit={(e) => this.submit(e)}>
            <div className="w-clearfix main-form">
              <label htmlFor="UserName">
                User Name:
              </label>
              <input id="UserName"
                onChange={(e) => this.setState({ username: e.target.value })}
                type="text"
                placeholder="Enter your User Name"
                name="UserName"
                data-name="UserName"
                required="required"
                className="w-input"
              />
              <label htmlFor="Password">
                Password:
              </label>
              <input id="Password"
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Enter your Password"
                name="Password"
                data-name="Password"
                required="required"
                className="w-input"
              />
              <input type="submit"
                value="Submit"
                data-wait="Please wait..."
                className="w-button btn primary-btn-color full-btn"
              />
            </div>
          </form>
        </section>
      </div>
      );
  }
}
;

