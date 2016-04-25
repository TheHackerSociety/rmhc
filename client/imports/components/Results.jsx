import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { groupBy } from 'lodash.groupBy';

class Results extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      loading: true,
      dists: null,
      newEvents: null,
      groupedEvents:null,
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
        this.attachDistanceSortAndGroup();
      }
    });
  }

  attachDistanceSortAndGroup() {
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
    const groupedEvents =_.groupBy(newEvents, (event) => {
      if (event.distance/1609.344 > 10 && event.distance/1609.344 < 20) {
        return 10;
      }
      if (event.distance/1609.344 >20 && event.distance/1609.344 < 30) {
        return 20;
      }
    });

    this.setState({groupedEvents, loading: false });
  }

  renderList(){
    for(var group in this.state.groupedEvents) {
       return this.state.groupedEvents[group].map((event, index) => {
          return (
            <div key={index}>
              <div>
              Distance: {
               (event.distance / 1609.344).toFixed(2)
              } miles
              </div>
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
        });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div>Loading</div>
      );
    }

    return (
      <div>
        {this.renderList() }
      </div>
    );
  }
}

export default Results;

export default createContainer((address) => {
  const origin = address;
  return {
    origin,
    events: Events.find({}).fetch(),
  };
}, Results);

Results.propTypes = {
  events: React.PropTypes.array,
  origin: React.PropTypes.object,
};

//this.state.newEvents.map((event, index) => {
          //return (
            //<div key={index}>
              //<div>
              //Distance: {
               //(event.distance / 1609.344).toFixed(2)
              //} miles
              //</div>
              //<div>{event.date.toDateString()}</div>
              //<div onClick={this.showResult}>
                //<div>{event.place}</div>
                //<div>{event.address}</div>
                //<div>{event.morningStartTime}-{event.morningEndTime}</div>
                //<div>{event.noonStartTime}-{event.noonEndTime}</div>
              //</div>
              //<div>-----</div>
            //</div>
          //);
        //})
