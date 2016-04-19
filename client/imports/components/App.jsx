import React from 'react';
import { connect } from 'param-store';
import HomePage from './HomePage';
import Search from './Search';
import ParamStore from 'param-store';
import Results from './Results.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      addressObj: null,
    };
  }

  componentWillMount() {
    ParamStore.set({ path: 'homePage' });
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

    if (this.props.currentParams.path === 'search/address') {
      return (
        <div>
          <Search setAddress={this.setAddress.bind(this)} />
        </div>
     );
    }

    if (this.props.currentParams.path === 'results') {
      return (
        <div>
          <Results origin={this.state.addressObj} />
        </div>
      );
    }

    return (
      <div></div>
    );
  }
}

export default connect(App, 'path');
App.propTypes = {
  currentParams: React.PropTypes.object,
};
