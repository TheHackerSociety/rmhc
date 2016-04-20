import React from 'react';
import { connect } from 'param-store';
import Information from './Information';

class InformationContainer extends React.Component {
  render() {
    const style = {
      position: 'absolute'
    };
    if (this.props.currentParams.path !== 'information') {
      return null;
    }

    return (
      <div style={style}>
        <Information {...this.props}/>
      </div>
      );
  }
}

export default connect(InformationContainer, 'path');
