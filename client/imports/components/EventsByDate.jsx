import React from 'react';
import { Link } from 'param-store';
import EventItemDate from './EventItemDate';
import EventItemLoading from './EventItemLoading';
import { createContainer } from 'meteor/react-meteor-data';

export default class EventsByDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      newEvents: null,
      weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    };
  }

  componentWillMount() {
    if (this.props.events.length > 0) {
      this.sortByDates(this.props);
    }
  }

  componentWillReceiveProps(props) {
    this.sortByDates(props);
  }

  openWindow() {
    window.open(`https://www.google.com/maps/place/${this.props.event.address.street} ${this.props.event.address.zip}/`, "_system")
  }

  sortByDates(props) {
    const newEvents = _.clone(props.events);
      newEvents.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });

    this.setState({ newEvents, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <section>
            <div className="location-top-info">
              <div className="loading-message">
                Fetching locations
              </div>
              <EventItemLoading />
              <EventItemLoading />
              <EventItemLoading />
              <EventItemLoading />
            </div>
          </section>
        </div>
      );
    }
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
                this.state.newEvents.map((event, index) => {
                  return (
                    <div key={index} className="location-card">
                      <div className="w-clearfix location-card-header">
                        <div className="w-clearfix date-container">
                          <div className="secondary-font-color day">
                              {this.state.weekdays[event.date.getDay()]}
                              <br />
                              {this.state.months[event.date.getMonth()]}
                          </div>
                          <div className="secondary-font-color day-number">
                            {event.date.getDate()}
                          </div>
                        </div>
                      </div>
                      <div className="w-clearfix card-info">
                        <a href='#'
                          target="_blank"
                          onClick={this.openWindow.bind(this)}
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

