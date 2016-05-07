import React from 'react';
import EventDetailsItem from './EventDetailsItem';
import EventForm from './EventForm';

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <section className="admin-container">
          <img alt="Ronald McDonald House Charities logo"
            width="178"
            src="images/rmhc-logo.png"
            className="center"
          />
            <img alt="Ronald McDonald Care Mobile "
              width="280"
              src="images/care-mobile-logo.png"
              className="center care-mobile-logo"
            />
            <EventForm />
            <div className="w-form form-wrapper">
            <EventDetailsItem />
          </div>
        </section>
      </div>
      );
  }
}
