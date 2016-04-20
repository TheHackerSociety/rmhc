import React from 'react';
import ParamStore from 'param-store';

export default class ResultsDate1 extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav>
            <img src="images/triangle-icon.svg" className="back-arrow" /><a href="location-3.html" className="nav-text" onClick={e => {
                                                                                                                                   ParamStore.set({
                                                                                                                                     path: 'location-3'
                                                                                                                                   });e.preventDefault();
                                                                                                                                 }}>Back</a>
          </nav>
          <section>
            <div className="location-top-info">
              <div>
                Within 10 miles
              </div>
            </div>
            <div className="location-card">
              <div className="w-clearfix location-card-header">
                <div className="w-clearfix miles-container">
                  <div className="miles-number">
                    2.14
                  </div>
                  <div className="miles-text">
                    MILES
                    <br />AWAY
                  </div>
                </div>
                <div className="w-clearfix date-container">
                  <div className="secondary-font-color day">
                    FRI
                    <br />OCT
                  </div>
                  <div className="secondary-font-color day-number">
                    28
                  </div>
                </div>
              </div>
              <div className="w-clearfix card-info">
                <a className="w-inline-block w-clearfix location-icon"><img alt="location icon" src="images/location-icon.svg" /></a>
                <div className="secondary-font-color location-name">
                  McDonald’s
                </div>
                <div className="secondary-font-color location-address">
                  914 Teetshorn St.
                  <br />Houston TX 77009
                </div>
                <div className="secondary-font-color location-time">
                  10:30am – 4:00pm
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      );
  }
}
;
