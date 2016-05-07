import React from 'react';

function deleteEvent (e, event) {
  e.preventDefault()
  Events.remove(event._id)
}

const EventDetailsItem = ({event}) => (
  <form id="email-form"
    name="email-form"
    data-name="Email Form"
    className="w-clearfix submissions"
  >
    <div className="input-container location">
      <label className="field-label" htmlFor="Location-4">
        Location Name:
      </label>
      {event.place}
    </div>
    <div className="input-container address">
      <label className="field-label" htmlFor="Address-4">
        Address:
      </label>
      {event.address.street} {event.address.zip}
    </div>
    <div className="input-container date-input">
      <label className="field-label" htmlFor="Date-4">
        Date:
      </label>
      {event.date.toString()}
    </div>
    <div className="w-clearfix input-container date">
      <label className="field-label" htmlFor="field-21">
        Morning Session:
      </label>
      <div className="middle-text">
        {event.morningStartTime} to {event.morningEndTime}
      </div>
    </div>
    <div className="w-clearfix input-container date">
      <label className="field-label" htmlFor="field-23">
        Afternoon Session:
      </label>
      <div className="middle-text">
        {event.noonStartTime} to {event.noonEndTime}
      </div>
    </div>
    <input type="submit"
      onClick={(e) => deleteEvent(e, event)}
      value="Delete"
      data-wait="Please wait..."
      className="w-button submit btn primary-btn-color delete"
    />
  </form>
  );
export default EventDetailsItem;
