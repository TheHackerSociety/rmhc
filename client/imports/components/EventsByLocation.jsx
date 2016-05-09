import React from 'react';
import { Link } from 'param-store';
import EventItemLocation from './EventItemLocation';
import EventItemLoading from './EventItemLoading.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import LocationError from  './error/LocationError';
import _ from 'lodash';

const METERS_PER_MILE = 1609.34;

export default class EventsByLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      eventsGroupedByDistance: {},
    };
  }

  componentWillMount() {
   if (this.props.events.length === 0) {
      this.setState({ loading: false })
    }

    if (this.props.events.length > 0) {
      this.getEventsGroupedByDistance((eventsGroupedByDistance) => {
        this.setState({ eventsGroupedByDistance, loading: false });
      });
    }
  }

  getEventsGroupedByDistance(callback) {
    const { events, origin } = this.props;

    const destinations = events.map((event) => (
      `${event.address.street} ${event.address.zip}`
    ));

    this.getGoogleDistance([origin], destinations, (response, status) => {
      if (status === google.maps.DistanceMatrixStatus.OK) {
        const distances = _.map(response.rows[0].elements, 'distance.value');
        const eventsWithDistance = _(_.zip(events, distances))
          .map(function (eventWithDistance) {
            const [event, distance] = eventWithDistance;
            event.distance = distance;
            return event;
          })
          .sortBy('distance')
          .value();

        const eventsGroupedByDistance = _.groupBy(eventsWithDistance, function ({distance}) {
          if (distance <= 10 * METERS_PER_MILE) {
            return 'Within 10 Miles';
          } else if (distance <= 20 * METERS_PER_MILE) {
            return 'Within 20 Miles';
          } else if (distance <= 100 * METERS_PER_MILE) {
            return 'Further than 20 Miles';
          } else return 'Further than 100 Miles';
        });
        callback(eventsGroupedByDistance);
      }
    });
  }

  getGoogleDistance(origins, destinations, callback) {
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins,
      destinations,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    }, callback);
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.props.events.length === 0 || (Object.keys(this.state.eventsGroupedByDistance).length === 1 && this.state.eventsGroupedByDistance['Further than 100 Miles'])) {
      return <LocationError />;
    }

    const groupedEvents = _.map(
      this.state.eventsGroupedByDistance,
      (events, groupTitle) => (
        <section key={groupTitle}>
          <div className="location-top-info">
            <div>
              {groupTitle}
            </div>
          </div>
          {
            events.map((event, index) => (
              <EventItemLocation key={index} event={event} />
            ))
          }
        </section>
      )
    )

    return (
      <div className="body-color">
        <div className="container">
          <nav className="nav events-nav">
            <img alt="triangle" src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="search.html" className="nav-text" params={{ path: 'search' }}> Back
            </Link>
          </nav>
          <div>
            {groupedEvents}
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer((address) => {
  return {
    origin: address.origin,
    events: Events.find({}).fetch(),
  };
}, EventsByLocation);

EventsByLocation.propTypes = {
  events: React.PropTypes.array,
  address: React.PropTypes.object,
  origin: React.PropTypes.string,
};

function Loading () {
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
  )
}
