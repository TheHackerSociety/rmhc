import React from 'react';
import EventsByDateContainer from './EventsByDateContainer';
import EventsByLocationContainer from './EventsByLocationContainer';
import IndexContainer from './IndexContainer';
import InfoContainer from './InfoContainer';
import LocationErrorContainer from './LocationErrorContainer';
import LoginContainer from './LoginContainer';
import SearchContainer from './SearchContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <EventsByDateContainer/>
        <EventsByLocationContainer/>
        <IndexContainer/>
        <InfoContainer/>
        <LocationErrorContainer/>
        <LoginContainer/>
        <SearchContainer/>
      </div>
      );
  }
}
