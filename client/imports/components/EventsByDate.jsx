import React from 'react';
import { Link } from 'param-store';
import EventItemDate from './EventItemDate';
import { createContainer } from 'meteor/react-meteor-data';

export default class EventsByDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      newEvents: null,
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
          <section>
            <div className="location-top-info">
              <div className="loading-message">
                Fetching locations
              </div>
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
                  return <EventItemDate event={event} key={index} />;
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

