import React from 'react';
import EventDetailsItem from './EventDetailsItem';
import EventForm from './EventForm';
import { createContainer } from 'meteor/react-meteor-data';

class Admin extends React.Component {
  render() {
    return (
      <div>
        <section className="admin-container">
          <img alt="Ronald McDonald House Charities logo"
            width="178"
            src="images/rmhc-logo.png"
            className="center"
            style={{ marginBottom: '48px' }}
          />
          <EventForm />
          {
            this.props.events.map((event) => {
              return <EventDetailsItem key={event._id} event={event}/>
            })
          }
        </section>
      </div>
      );
  }
}

export default createContainer(() => {
  return {
    events: Events.find().fetch()
  }
}, Admin)
