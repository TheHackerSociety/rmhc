import React from 'react';
import ParamStore from 'param-store';
import EventItem from './EventItem';

export default class EventsByLocation extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav className="nav">
            <img src="images/triangle-icon.svg" className="back-arrow" /><a href="search.html" className="nav-text" onClick={e => {
                                                                                                                               ParamStore.set({
                                                                                                                                 path: 'search'
                                                                                                                               });e.preventDefault();
                                                                                                                             }}>Back</a>
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
              <div className="test">
                Fetching locations
              </div>
            </div>
            <EventItem></EventItem>
          </section>
          <div className="blank-card">
            <div className="blank-top">
              <div className="window-1" />
            </div>
            <div className="window-2" />
            <div className="window-3" />
            <div className="window-4" />
            <div className="window-5" />
          </div>
        </div>
      </div>
      );
  }
}
;
