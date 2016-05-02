import React from 'react';
import { connect } from 'param-store';
import EventsByDate from './EventsByDate';

class EventsByDateContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'events-by-date') {
      return null;
    }

    return <EventsByDate {...this.props}/>;
  }
}

export default connect(EventsByDateContainer, 'path');
