import React from 'react';
import { Link } from 'param-store';

const LocationError = ({}) => (
  <div className="body-color">
    <div className="container">
      <nav className="nav">
        <img alt="triangle" src="images/triangle-icon.svg" className="back-arrow" />
        <Link href="search.html" className="nav-text" params={{ path: 'search' }}> Back
        </Link>
      </nav>
      <img alt="cellphone" src="images/cellphone.svg" className="phone-img" />
      <div className="location-error-message">
        No locations
        <br />found at this time
      </div>
    </div>
  </div>
);
export default LocationError;
