import React from 'react';
import { connect } from 'param-store';
import Location3 from './Location3';

class Location3Container extends React.Component {
  render() {
    const style = {
      position: 'absolute'
    };
    if (this.props.currentParams.path !== 'location-3') {
      return null;
    }

    return (
      <div style={style}>
        <Location3 {...this.props}/>
      </div>
      );
  }
}

export default connect(Location3Container, 'path');
