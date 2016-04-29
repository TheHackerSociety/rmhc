import React from 'react';
import ParamStore from 'param-store';

export default class LocationError extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav className="nav">
            <img src="images/triangle-icon.svg" className="back-arrow" /><a href="search.html" className="nav-text" onClick={e => {
                                                                                                                               ParamStore.set({
                                                                                                                                 path: 'search'
                                                                                                                               });e.preventDefault();
                                                                                                                             }}>Back</a>
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
