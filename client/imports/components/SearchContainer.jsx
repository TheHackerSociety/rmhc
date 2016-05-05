import React from 'react';
import { connect } from 'param-store';
import Search from './Search';

class SearchContainer extends React.Component {
  render() {
    const {path} = this.props.currentParams;
    if (path !== 'search') {
      return null;
    }

    return <Search setAddress={this.props.setAddress.bind(this)}/>;
  }
}

export default connect(SearchContainer, 'path');
