import React from 'react';
import ParamStore from 'param-store';
import { createContainer } from 'meteor/react-meteor-data';

export default class EventsByLocation extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      loading: true,
      dists: null,
      newEvents: null,
      weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    };
  }

  componentWillMount() {
    if (this.props.events.length > 0) {
      this.getDistance();
    }
  }

  getGoogleDistance(origin, destinations, callback) {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: origin,
      destinations,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    }, callback);
  }

  getDistance() {
    const origin = [this.props.origin.origin];
    const destinations = this.props.events.map((event) => {
      return event.address;
    });

    this.getGoogleDistance(origin, destinations, (response, status) => {
      if (status === google.maps.DistanceMatrixStatus.OK) {
        this.setState({ dists: response.rows[0] });
        this.attachDistanceAndSort();
      }
    });
  }

  attachDistanceAndSort() {
    const newEvents = _.clone(this.props.events);
    newEvents.forEach((event, index) => {
      event.distance = this.state.dists.elements[index].distance.value;
    });
    newEvents.sort((a, b) => {
      if (a.distance > b.distance) {
        return 1;
      }
      if (a.distance < b.distance) {
        return -1;
      }
      return 0;
    });
    this.setState({ newEvents, loading: false });
  }

  showResult(e) {
    console.log(e.target);
  }

  render() {
        if (this.state.loading) {
      return(
        <div>Loading</div>
      );
    }
    return (
      <div className="body-color">
        <div className="container">
          <nav>
            <img src="images/triangle-icon.svg"
              className="back-arrow"
            />
            <a href="search.html" className="nav-text"
              onClick={e => {
                ParamStore.set({ path: 'search' });
                e.preventDefault();
              }}
            >
              Back
            </a>
          </nav>
          <section>
            <div className="location-top-info">
              <div>
                Within 10 miles
              </div>
            </div>
            {this.state.newEvents.map((event, index) => {
              return (
                <div key={index} className="location-card">
                  <div className="w-clearfix location-card-header">
                    <div className="w-clearfix miles-container">
                      <div className="miles-number">
                        {(event.distance / 1609.344).toFixed(2)}
                      </div>
                      <div className="miles-text">
                        MILES
                        <br />AWAY
                      </div>
                    </div>
                    <div className="w-clearfix date-container">
                      <div className="secondary-font-color day">
                        {this.state.weekdays[event.date.getDay()]}
                        <br />{this.state.months[event.date.getMonth()]}
                      </div>
                      <div className="secondary-font-color day-number">
                        {event.date.getDate()}
                      </div>
                    </div>
                  </div>
                  <div className="w-clearfix card-info">
                    <a className="w-inline-block w-clearfix location-icon">
                      <img alt="location icon" src="images/location-icon.svg" />
                    </a>
                    <div className="secondary-font-color location-name">
                      {event.place}
                    </div>
                    <div className="secondary-font-color location-address">
                      {event.address}
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
          </section>
        </div>
      </div>
      );
  }
}
export default EventsByLocation;

export default createContainer((address) => {
  const origin = address;
  return {
    origin,
    events: Events.find({}).fetch(),
  };
}, EventsByLocation);

EventsByLocation.propTypes = {
  events: React.PropTypes.array,
  origin: React.PropTypes.object,
};
