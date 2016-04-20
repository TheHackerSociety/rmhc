import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      loading: true,
      newEvents: null,
    }
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
      <div>
        { this.state.newEvents.map((event, index) => {
          return (
            <div key={index}>
              <div>{event.date.toDateString()}</div>
              <div onClick={this.showResult}>
                <div>{event.place}</div>
                <div>{event.address}</div>
                <div>{event.morningStartTime}-{event.morningEndTime}</div>
                <div>{event.noonStartTime}-{event.noonEndTime}</div>
              </div>
              <div>-----</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    events: Events.find().fetch(),
  };
}, Dates);

Dates.propTypes = {
  events: React.PropTypes.array,
};

