import React from 'react';
import AdminContainer from './AdminContainer';
import EventsByDateContainer from './EventsByDateContainer';
import EventsByLocationContainer from './EventsByLocationContainer';
import IndexContainer from './IndexContainer';
import InfoContainer from './InfoContainer';
import LocationErrorContainer from './LocationErrorContainer';
import LoginContainer from './LoginContainer';
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
        <AdminContainer />
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
