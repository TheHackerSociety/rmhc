import React from 'react';
import { connect } from 'param-store';
import Info from './Info';

class InfoContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'info') {
      return null;
    }

    return <Info {...this.props}/>;
  }
}

export default connect(InfoContainer, 'path');
