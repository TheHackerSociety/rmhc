import React from 'react';
import EventsByDateContainer from './EventsByDateContainer';
import EventsByLocationContainer from './EventsByLocationContainer';
import IndexContainer from './IndexContainer';
import InfoContainer from './InfoContainer';
import LocationErrorContainer from './error/LocationErrorContainer';
import LoginContainer from './admin/LoginContainer';
import SearchContainer from './SearchContainer';
import ParamStore from 'param-store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
    };
    this.setAddress = this.setAddress.bind(this);
  }

  setAddress(address) {
    ParamStore.set({ path: 'events-by-location' });
    this.setState({ address });
  }

  render() {
    return (
      <div>
        <EventsByDateContainer />
        <EventsByLocationContainer origin={this.state.address} />
        <IndexContainer />
        <InfoContainer />
        <LocationErrorContainer />
        <LoginContainer />
        <SearchContainer setAddress={this.setAddress} />
      </div>
      );
  }
}
