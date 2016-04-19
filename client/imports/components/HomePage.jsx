import React from 'react';
import ParamStore from 'param-store';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }
  setAddressSearch() {
    ParamStore.set({ path: 'search' });
  }
  setDateSearch() {
    ParamStore.set({ path: 'dates' });
  }

  render() {
    return (
      <div>
        <p onClick={this.setAddressSearch}>Find by address</p>
        <p onClick={this.setDateSearch}>Find by Date</p>
      </div>
      );
  }
}
