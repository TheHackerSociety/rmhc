import React from 'react';
import { Link } from 'param-store';
import EventItemLocation from './EventItemLocation';
import EventItemLoading from './EventItemLoading.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';

export default class EventsByLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dists: null,
      groupedArray: [],
      milesGroups: [],
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
    const destinations = this.props.events.map((event) => (
      `${event.address.street} ${event.address.zip}`
    ));

    this.getGoogleDistance(origin, destinations, (response, status) => {
      if (status === google.maps.DistanceMatrixStatus.OK) {
        this.setState({ dists: response.rows[0] });
        this.attachDistanceSortAndGroup();
      }
    });
  }

  attachDistanceSortAndGroup() {
    const eventsWithDistance = this.props.events.map((event, index) => {
      event.distance = this.state.dists.elements[index].distance.value;
      return event;
    });

    const eventsSortByDistance = _.sortBy(eventsWithDistance, 'distance');
    const groupedEvents = _.groupBy(eventsSortByDistance, (event) => {
      if (event.distance / 1609.344 > 0 && event.distance / 1609.344 <= 10) {
        return 10;
      }
      if (event.distance / 1609.344 > 10 && event.distance / 1609.344 <= 20) {
        return 20;
      }
      return 30;
    });

    const groupedArray = [];
    const milesGroups = [];

    for (const group in groupedEvents) {
      if (group === '10') {
        milesGroups.push('Within 10 miles');
      } else if (group === '20') {
        milesGroups.push('Within 20 miles');
      } else {
        milesGroups.push('Further than 20 miles');
      }

      groupedArray.push(groupedEvents[group]);
    }

    this.setState({ groupedArray, milesGroups, loading: false });
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
            <img alt="triangle" src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="search.html" className="nav-text" params={{ path: 'search' }}> Back
            </Link>
          </nav>
          <div>
            {
              this.state.groupedArray.map((array, index) => (
                <section key={index}>
                  <div className="location-top-info">
                    <div>
                    {this.state.milesGroups[index]}
                    </div>
                  </div>
                    {
                      array.map((event, index) => (
                        <EventItemLocation
                          key={index + 3}
                          event={event}
                        />
                      ))
                    }
                </section>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

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
