import React from 'react';
import ParamStore from 'param-store';

export default class Index extends React.Component {
  render() {
    return (
      <div className="body-color">
        <div className="container">
          <nav className="w-clearfix">
            <a href="info.html" className="w-inline-block w-clearfix info-icon" onClick={e => {
                                                                                           ParamStore.set({
                                                                                             path: 'info'
                                                                                           });e.preventDefault();
                                                                                         }}><img alt="information icon" src="images/information-icon.svg" /></a>
          </nav><img alt="Ronald McDonald House Charities logo"
                  width="178"
                  src="images/rmhc-logo.png"
                  className="center" /><img alt="Ronald McDonald Care Mobile "
                                                                                                                              width="280"
                                                                                                                              src="images/care-mobile-logo.png"
                                                                                                                              className="center care-mobile-logo" />
          <div className="w-clearfix btn-wrapper">
            <a href="search.html" className="w-inline-block btn-container primary-btn-color" onClick={e => {
                                                                                                        ParamStore.set({
                                                                                                          path: 'search'
                                                                                                        });e.preventDefault();
                                                                                                      }}><img alt="Find by location bus icon" src="images/location-bus.svg" className="center" />
              <div className="btn-text"> Find by
                <br /> location </div>
            </a>
            <a href="#" className="w-inline-block btn-container secondary-btn-color"><img alt="Find by location date icon" src="images/location-bus.svg" className="center" />
              <div className="btn-text"> Find by
                <br />date </div>
            </a>
          </div>
        </div>
      </div>
      );
  }
}
;
