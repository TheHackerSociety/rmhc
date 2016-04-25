import React from 'react';
import EventsByLocationContainer from './EventsByLocationContainer';
import EventsByDateContainer from './EventsByDateContainer';
import IndexContainer from './IndexContainer';
import InfoContainer from './InfoContainer';
import SearchContainer from './SearchContainer';
import ParamStore from 'param-store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      address: null,
    };
  }

  setAddress(address) {
    ParamStore.set({ path: 'events-by-location' });
    this.setState({ address });
  }

  render() {
    return (
      <div>
        <EventsByLocationContainer
          origin={this.state.address}
        />
        <EventsByDateContainer />
        <IndexContainer />
        <InfoContainer />
        <SearchContainer
          setAddress={this.setAddress.bind(this)}
        />
      </div>
      );
  }
}
