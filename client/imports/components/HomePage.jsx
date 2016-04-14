import React from 'react';
import ParamStore from 'param-store';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }
  startSearch() {
    ParamStore.set({ path: 'search' });
  }

  render() {
    return (
      <div>
        <p onClick={this.startSearch}>Start</p>
      </div>
      );
  }
}
