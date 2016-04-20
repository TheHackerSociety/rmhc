import React from 'react';
import { connect } from 'param-store';
import Index from './Index';

class IndexContainer extends React.Component {
  render() {
    const style = {
      position: 'absolute'
    };
    if (this.props.currentParams.path !== 'index') {
      return null;
    }

    return (
      <div style={style}>
        <Index {...this.props}/>
      </div>
      );
  }
}

export default connect(IndexContainer, 'path');
