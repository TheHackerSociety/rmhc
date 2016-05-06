import React from 'react';

const EventItem = ({}) => (
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
      <a className="w-inline-block w-clearfix location-icon">
        <img alt="location icon" src="images/location-icon.svg" />
      </a>
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
  );
export default EventItem;
