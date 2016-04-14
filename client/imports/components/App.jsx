import React from 'react';
import { connect } from 'param-store';
import HomePage from './HomePage';
import Search from './Search';
import ParamStore from 'param-store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  componentWillMount() {
    ParamStore.set({ path: 'homePage' })
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
          <Search />
        </div>
      );
    }

    return (
       <div></div>
    );
  }
}

export default connect(App, 'path');
