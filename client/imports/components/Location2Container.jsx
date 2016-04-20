import React from 'react';
import { connect } from 'param-store';
import Location2 from './Location2';

class Location2Container extends React.Component {
  render() {
    const style = {
      position: 'absolute'
    };
    if (this.props.currentParams.path !== 'location-2') {
      return null;
    }

    return (
      <div style={style}>
        <Location2 {...this.props}/>
      </div>
      );
  }
}

export default connect(Location2Container, 'path');
