import React from 'react';
import { connect } from 'param-store';
import Index from './Index';

class IndexContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'index' && path !== '') {
      return null;
    }

    return <Index {...this.props}/>;
  }
}

export default connect(IndexContainer, 'path');
