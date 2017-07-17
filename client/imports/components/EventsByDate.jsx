import React from 'react';
import { Link } from 'param-store';
import EventItemDate from './EventItemDate';
import LocationError from './error/LocationError'
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash';


class EventsByDate extends React.Component {
  render() {
    const { events } = this.props;
    const eventsSortByDate = _.sortBy(events, 'date');

    if (events.length === 0) {
        return <LocationError />
      }
    return (
      <div className="body-color">
        <div className="container" style={{ 'overflowY': 'auto' }}>
          <nav className="nav events-nav">
            <img alt="back arrow" src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="search.html" className="nav-text" params={{ path: 'index' }}> Back
            </Link>
          </nav>
            <section>
              {
                eventsSortByDate.map((event, index) => (
                  <EventItemDate key={index} event={event} />
                ))
              }
            </section>
        </div>
        </div>
    );
  }
}

export default createContainer(() => (
  { events: Events.find().fetch() }
), EventsByDate);

EventsByDate.propTypes = {
  events: React.PropTypes.array,
};
