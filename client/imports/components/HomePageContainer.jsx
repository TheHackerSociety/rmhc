import React from 'react';
import { connect } from 'param-store';
import HomePage from './HomePage';
import Search from './Search';
import Results from './Results';

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      addressObj: null,
    };
  }

  setAddress(addressObj) {
    this.setState({ addressObj });
  }

  render() {
    const style = {
      position: 'absolute',
    };
    if (this.props.currentParams.path === 'homePage') {
      return (
      <div style={style}>
        <HomePage {...this.props} />
      </div>
      );
    }

    if (this.props.currentParams.path === 'search') {
      return (
        <div>
          <Search setAddress={this.setAddress.bind(this)} />
        </div>
      );
    }

    if (this.props.currentParams.path === 'results') {
      return (
        <Results />
      );
    }

    return (
       <div></div>
    );
  }
}

export default connect(HomePageContainer, 'path');
HomePageContainer.propTypes = {
  currentParams: React.PropTypes.object,
};
