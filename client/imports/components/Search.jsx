import React from 'react';
import { Link } from 'param-store';

export default class Search extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav>
            <Link href="index.html" className="nav-text cancel" params={{  path: 'index'}}> Cancel
            </Link>
          </nav>
          <div className="address-container">
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
            <div className="input-container">
              <a href="#" className="w-inline-block address-option">
                <div> 675 Bering St. Houston TX, USA </div>
              </a>
            </div>
          </div>
          <div className="w-form address-input">
            <form id="email-form"
              name="email-form"
              data-name="Email Form"
              className="w-clearfix form">
              <input id="address-2"
                type="text"
                placeholder="Address or zip"
                name="address-2"
                data-name="Address 2"
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
      );
  }
}
;
