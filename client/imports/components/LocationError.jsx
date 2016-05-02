import React from 'react';
import { Link } from 'param-store';

export default class LocationError extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav className="nav">
            <img src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="search.html" className="nav-text" params={{  path: 'search'}}> Back
            </Link>
          </nav><img src="images/cellphone.svg" className="phone-img" />
          <div className="location-error-message">
            No locations
            <br />found at this time
          </div>
        </div>
      </div>
      );
  }
}
;
