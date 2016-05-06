import React from 'react';

export default class Login extends React.Component {
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
            <form id="email-form" name="email-form" data-name="Email Form">
              <label htmlFor="UserName">
                User Name:
              </label>
              <input id="UserName"
                type="email"
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
            </form>
            <div className="w-form-done">
              <p>
                Thank you! Your submission has been received!
              </p>
            </div>
            <div className="w-form-fail">
              <p>
                Oops! Something went wrong while submitting the form
              </p>
            </div>
          </div>
        </section>
      </div>
      );
  }
}
