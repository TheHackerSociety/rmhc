import React from 'react';
import { Link } from 'param-store';
import EventItem from './EventItem';
import EventItemLoading from './EventItemLoading';

export default class EventsByLocation extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav className="nav">
            <img src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="search.html" className="nav-text" params={{  path: 'search'}}> Back
            </Link>
          </nav>
          <div className="network-error">
            <div className="secondary-font-color alert">
              The network was interupted
              <br />or you're offline.
            </div>
          </div>
          <section>
            <div className="location-top-info">
              <div>
                Within 10 miles
              </div>
            </div>
            <EventItem></EventItem>
          </section>
          <section>
            <div className="location-top-info">
              <div className="loading-message">
                Fetching locations
              </div>
            </div>
          </section>
          <EventItemLoading></EventItemLoading>
        </div>
      </div>
      );
  }
}
;
