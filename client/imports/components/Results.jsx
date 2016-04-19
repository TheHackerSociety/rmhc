import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class Results extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      dists: null,
      newEvents: null,
    };
  }

  componentWillReceiveProps(nextprops) {
    this.getDistance(nextprops);
  }

  getDistance(nextprops) {
    const origin = nextprops.origin.origin;
    const addresses = nextprops.events.map((event) => {
      return event.address;
    });
    const destinations = addresses.join('|');
    console.log(origin, destinations);
    Meteor.call('getDistance', origin, destinations, (err, success) => {
      if (!err) {
        console.log(success);
        this.setState({ dists: success.data.rows[0] });
        this.attachDistance();
      }
    });
  }

  attachDistance() {
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
    this.setState({ newEvents });
  }

  render() {
    if (!this.props.loading &&  this.state.newEvents) {
      return (
        <div>
          { this.state.newEvents.map((event, index) => {
            return (
              <div key={index}>
                <div>
                Distance: {
                 (event.distance / 1609.344).toFixed(2)
                } miles
                </div>
                <div>{event.date.toDateString()}</div>
                <div>{event.place}</div>
                <div>{event.address}</div>
                <div>{event.morningStartTime}-{event.morningEndTime}</div>
                <div>{event.noonStartTime}-{event.noonEndTime}</div>
                <div>-----</div>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>Loading</div>
    );
  }
}

export default Results;

export default createContainer((address) => {
  const eventsHandle = Meteor.subscribe('events');
  const loading = !eventsHandle.ready();
  const list = Events.find({}).fetch();
  const listExists = !loading && list;
  const origin = address;
  return {
    origin,
    loading,
    events: listExists ? list : [],
  };
}, Results);

Results.propTypes = {
  loading: React.PropTypes.bool,
  events: React.PropTypes.array,
};
