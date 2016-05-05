import React from 'react';
import { Link } from 'param-store';
import EventItemDate from './EventItemDate';
import EventItemLoading from './EventItemLoading';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export default class EventsByDate extends React.Component {
  openWindow(e, event) {
    e.preventDefault();
    window.open(`https://www.google.com/maps/place/${event.address.street} ${event.address.zip}/`, "_system")
  }

  render() {
    const {events} = this.props;
    const eventsSortByDate = _.sortBy(events, 'date');

    return (
      <div className="body-color">
        <div className="container">
          <nav className="nav events-nav">
            <img src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="search.html" className="nav-text" params={{ path: 'index' }}> Back
            </Link>
          </nav>
            <section>
              {
                eventsSortByDate.map((event, index) => {
                  return (
                    <div key={index} className="location-card">
                      <div className="w-clearfix location-card-header">
                        <div className="w-clearfix date-container">
                          <div className="secondary-font-color day">
                              {WEEKDAYS[event.date.getDay()]}
                              <br />
                              {MONTHS[event.date.getMonth()]}
                          </div>
                          <div className="secondary-font-color day-number">
                            {event.date.getDate()}
                          </div>
                        </div>
                      </div>
                      <div className="w-clearfix card-info">
                        <a href='#'
                          target="_blank"
                          onClick={(e) => this.openWindow(e, event)}
                          className="w-inline-block w-clearfix location-icon"
                        >
                          <img alt="location icon"
                            src="images/location-icon.svg"
                          />
                        </a>
                        <div className="secondary-font-color location-name">
                          {event.place}
                        </div>
                        <div className="secondary-font-color location-address">
                          {event.address.street}
                          <br />
                          {event.address.zip}
                        </div>
                        <div className="secondary-font-color location-time">
                          {event.morningStartTime}-{event.morningEndTime}
                          <br />
                          {event.noonStartTime}-{event.noonEndTime}
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </section>
        </div>
        </div>
    );
  }
}

export default createContainer(() => {
  return {
    events: Events.find().fetch(),
  };
}, EventsByDate);

EventsByDate.propTypes = {
  events: React.PropTypes.array,

};

//<div className="network-error">
            //<div className="secondary-font-color alert">
              //The network was interupted
              //<br />or you're offline.
            //</div>
          //</div>

