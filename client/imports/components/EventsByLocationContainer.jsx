import React from 'react';
import { connect } from 'param-store';
import EventsByLocation from './EventsByLocation';

class EventsByLocationContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'events-by-location') {
      return null;
    }

    return <EventsByLocation origin={this.props.origin}/>;
  }
}

export default connect(EventsByLocationContainer, 'path');
