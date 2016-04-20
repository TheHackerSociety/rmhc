import React from 'react';
import ParamStore from 'param-store';

export default class Location2 extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav>
            <a href="index.html" className="nav-text cancel" onClick={e => {
                                                                        ParamStore.set({
                                                                          path: 'index'
                                                                        });e.preventDefault();
                                                                      }}>Cancel</a>
          </nav>
          <div className="address-prompt">
            Type you address or zip,
            <br /> or use your location
          </div>
          <div className="address-input">
            <div className="w-form">
              <form id="email-form"
                name="email-form"
                data-name="Email Form"
                className="w-clearfix">
                <input id="address"
                  type="text"
                  placeholder="Address or zip"
                  name="address"
                  data-name="address"
                  className="w-input input" /><img alt="target icon" src="images/input-icon.svg" className="address-icon" />
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
          </div>
        </div>
      </div>
      );
  }
}
;
