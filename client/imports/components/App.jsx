import React from 'react';
import EventsByLocationContainer from './EventsByLocationContainer';
import IndexContainer from './IndexContainer';
import InfoContainer from './InfoContainer';
import SearchContainer from './SearchContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <EventsByLocationContainer/>
        <IndexContainer/>
        <InfoContainer/>
        <SearchContainer/>
      </div>
      );
  }
}
