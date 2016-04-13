import React from 'react';
import { connect } from 'param-store';
import HomePage from './HomePage';

class HomePageContainer extends React.Component {
  render() {
    const style = {
      position: 'absolute'
    };
    if (this.props.currentParams.path !== 'homePage') {
      return null;
    }

    return (
      <div style={style}>
        <HomePage {...this.props}/>
      </div>
      );
  }
}

export default connect(HomePageContainer, 'path');
