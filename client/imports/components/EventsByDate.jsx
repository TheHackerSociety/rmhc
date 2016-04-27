import React from 'react';
import ParamStore from 'param-store';
import { createContainer } from 'meteor/react-meteor-data';


export default class EventsByDate extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      loading: true,
      newEvents: null,
      weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    };
  }

  componentWillMount() {
    if (this.props.events.length > 0) {
      this.sortByDates();
    }
  }

  sortByDates() {
    const newEvents = _.clone(this.props.events);
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
          Loading
        </div>
      );
    }

    return (
      <div className="body-color">
        <div className="container">
          <nav>
            <img src="images/triangle-icon.svg"
              className="back-arrow"
            />
            <a href="index.html" className="nav-text"
              onClick={e => {
                ParamStore.set({ path: 'index' });
                e.preventDefault();
              }}
            >
              Back
            </a>
          </nav>
          {this.state.newEvents.map((event, index) => {
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
                  <a href={`https://www.google.com/maps/place/${event.address.street} ${event.address.zip}/`}
                    target="_blank"
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
          })}
        </div>
      </div>
    );
  }

}

export default EventsByDate;

export default createContainer(() => {
  return {
    events: Events.find().fetch(),
  };
}, EventsByDate);

EventsByDate.propTypes = {
  events: React.PropTypes.array,
};

