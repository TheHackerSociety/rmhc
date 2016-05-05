import React from 'react';
import PlaceItemAdmin from './PlaceItemAdmin';
import EventDetailsItem from './EventDetailsItem';

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <section className="admin-container">
          <img alt="Ronald McDonald House Charities logo"
            width="178"
            src="images/rmhc-logo.png"
            className="center" /><img alt="Ronald McDonald Care Mobile "
                                                                                                                        width="280"
                                                                                                                        src="images/care-mobile-logo.png"
                                                                                                                        className="center care-mobile-logo" />
          <div className="w-form form-wrapper">
            <form id="email-form"
              name="email-form"
              data-name="Email Form"
              className="w-clearfix main-form">
              <div className="input-container location">
                <label htmlFor="Location-2">
                  Location Name:
                </label>
                <input id="Location-2"
                  type="text"
                  placeholder="Enter Location"
                  name="Location-2"
                  data-name="Location 2"
                  required="required"
                  className="w-input text-field" />
              </div>
              <div className="input-container address">
                <label htmlFor="Address-2">
                  Address:
                </label>
                <input id="Address-2"
                  type="text"
                  placeholder="Enter Address"
                  name="Address-2"
                  data-name="Address 2"
                  required="required"
                  className="w-input text-field" />
                <div className="address-popout">
                  <PlaceItemAdmin></PlaceItemAdmin>
                  <PlaceItemAdmin></PlaceItemAdmin>
                  <PlaceItemAdmin></PlaceItemAdmin>
                  <PlaceItemAdmin></PlaceItemAdmin>
                  <PlaceItemAdmin></PlaceItemAdmin>
                  <PlaceItemAdmin></PlaceItemAdmin>
                </div>
              </div>
              <div className="input-container date-input">
                <label htmlFor="Date-2">
                  Date:
                </label>
                <input id="Date-2"
                  type="text"
                  placeholder="mm/dd/yyyy"
                  name="Date-2"
                  data-name="Date 2"
                  required="required"
                  className="w-input text-field" />
              </div>
              <div className="w-clearfix input-container date">
                <label htmlFor="field-27">
                  Morning Session:
                </label>
                <select id="field-27"
                  name="field-27"
                  data-name="Field 27"
                  className="w-select time-field">
                  <option value="8:00 am">
                    8:00 am
                  </option>
                  <option value="8:15 am">
                    8:15 am
                  </option>
                  <option value="8:30 am">
                    8:30 am
                  </option>
                  <option value="8:45 am">
                    8:45 am
                  </option>
                  <option value="9:00 am">
                    9:00 am
                  </option>
                  <option value="9:15 am">
                    9:15 am
                  </option>
                  <option value="9:30 am">
                    9:30 am
                  </option>
                  <option value="9:45 am">
                    9:45 am
                  </option>
                  <option value="10:00 am">
                    10:00 am
                  </option>
                  <option value="10:15 am">
                    10:15 am
                  </option>
                  <option value="10:30 am">
                    10:30 am
                  </option>
                  <option value="10:45 am">
                    10:45 am
                  </option>
                  <option value="11:00 am">
                    11:00 am
                  </option>
                  <option value="11:15 am">
                    11:15 am
                  </option>
                  <option value="11:30 am">
                    11:30 am
                  </option>
                  <option value="11:45 am">
                    11:45 am
                  </option>
                  <option value="12:00 pm">
                    12:00 pm
                  </option>
                </select>
                <div className="middle-text">
                  to
                </div>
                <select id="field-28"
                  name="field-28"
                  data-name="Field 28"
                  className="w-select time-field">
                  <option value="8:00 am">
                    8:00 am
                  </option>
                  <option value="8:15 am">
                    8:15 am
                  </option>
                  <option value="8:30 am">
                    8:30 am
                  </option>
                  <option value="8:45 am">
                    8:45 am
                  </option>
                  <option value="9:00 am">
                    9:00 am
                  </option>
                  <option value="9:15 am">
                    9:15 am
                  </option>
                  <option value="9:30 am">
                    9:30 am
                  </option>
                  <option value="9:45 am">
                    9:45 am
                  </option>
                  <option value="10:00 am">
                    10:00 am
                  </option>
                  <option value="10:15 am">
                    10:15 am
                  </option>
                  <option value="10:30 am">
                    10:30 am
                  </option>
                  <option value="10:45 am">
                    10:45 am
                  </option>
                  <option value="11:00 am">
                    11:00 am
                  </option>
                  <option value="11:15 am">
                    11:15 am
                  </option>
                  <option value="11:30 am">
                    11:30 am
                  </option>
                  <option value="11:45 am">
                    11:45 am
                  </option>
                  <option value="12:00 pm">
                    12:00 pm
                  </option>
                </select>
              </div>
              <div className="w-clearfix input-container date">
                <label htmlFor="field-29">
                  Afternoon Session:
                </label>
                <select id="field-29"
                  name="field-29"
                  data-name="Field 29"
                  className="w-select time-field">
                  <option value="12:00 pm">
                    12:00 pm
                  </option>
                  <option value="12:15 pm">
                    12:15 pm
                  </option>
                  <option value="12:30 pm">
                    12:30 pm
                  </option>
                  <option value="12:45 pm">
                    12:45 pm
                  </option>
                  <option value="1:00 pm">
                    1:00 pm
                  </option>
                  <option value="1:15 pm">
                    1:15 pm
                  </option>
                  <option value="1:30 pm">
                    1:30 pm
                  </option>
                  <option value="1:45 pm">
                    1:45 pm
                  </option>
                  <option value="2:00 pm">
                    2:00 pm
                  </option>
                  <option value="2:15 pm">
                    2:15 pm
                  </option>
                  <option value="2:30 pm">
                    2:30 pm
                  </option>
                  <option value="2:45 pm">
                    2:45 pm
                  </option>
                  <option value="3:00 pm">
                    3:00 pm
                  </option>
                  <option value="3:15 pm">
                    3:15 pm
                  </option>
                  <option value="3:30 pm">
                    3:30 pm
                  </option>
                  <option value="3:45 pm">
                    3:45 pm
                  </option>
                  <option value="4:00 pm">
                    4:00 pm
                  </option>
                  <option value="4:15 pm">
                    4:15 pm
                  </option>
                  <option value="4:30 pm">
                    4:30 pm
                  </option>
                  <option value="4:45 pm">
                    4:45 pm
                  </option>
                  <option value="5:00 pm">
                    5:00 pm
                  </option>
                  <option value="5:15 pm">
                    5:15 pm
                  </option>
                  <option value="5:30 pm">
                    5:30 pm
                  </option>
                  <option value="5:45 pm">
                    5:45 pm
                  </option>
                  <option value="6:00 pm">
                    6:00 pm
                  </option>
                  <option value="6:15 pm">
                    6:15 pm
                  </option>
                  <option value="6:30 pm">
                    6:30 pm
                  </option>
                  <option value="6:45 pm">
                    6:45 pm
                  </option>
                  <option value="7:00 pm">
                    7:00 pm
                  </option>
                  <option value="7:15 pm">
                    7:15 pm
                  </option>
                  <option value="7:30 pm">
                    7:30 pm
                  </option>
                  <option value="7:45 pm">
                    7:45 pm
                  </option>
                  <option value="8:00 pm">
                    8:00 pm
                  </option>
                </select>
                <div className="middle-text">
                  to
                </div>
                <select id="field-30"
                  name="field-30"
                  data-name="Field 30"
                  className="w-select time-field">
                  <option value="12:00 pm">
                    12:00 pm
                  </option>
                  <option value="12:15 pm">
                    12:15 pm
                  </option>
                  <option value="12:30 pm">
                    12:30 pm
                  </option>
                  <option value="12:45 pm">
                    12:45 pm
                  </option>
                  <option value="1:00 pm">
                    1:00 pm
                  </option>
                  <option value="1:15 pm">
                    1:15 pm
                  </option>
                  <option value="1:30 pm">
                    1:30 pm
                  </option>
                  <option value="1:45 pm">
                    1:45 pm
                  </option>
                  <option value="2:00 pm">
                    2:00 pm
                  </option>
                  <option value="2:15 pm">
                    2:15 pm
                  </option>
                  <option value="2:30 pm">
                    2:30 pm
                  </option>
                  <option value="2:45 pm">
                    2:45 pm
                  </option>
                  <option value="3:00 pm">
                    3:00 pm
                  </option>
                  <option value="3:15 pm">
                    3:15 pm
                  </option>
                  <option value="3:30 pm">
                    3:30 pm
                  </option>
                  <option value="3:45 pm">
                    3:45 pm
                  </option>
                  <option value="4:00 pm">
                    4:00 pm
                  </option>
                  <option value="4:15 pm">
                    4:15 pm
                  </option>
                  <option value="4:30 pm">
                    4:30 pm
                  </option>
                  <option value="4:45 pm">
                    4:45 pm
                  </option>
                  <option value="5:00 pm">
                    5:00 pm
                  </option>
                  <option value="5:15 pm">
                    5:15 pm
                  </option>
                  <option value="5:30 pm">
                    5:30 pm
                  </option>
                  <option value="5:45 pm">
                    5:45 pm
                  </option>
                  <option value="6:00 pm">
                    6:00 pm
                  </option>
                  <option value="6:15 pm">
                    6:15 pm
                  </option>
                  <option value="6:30 pm">
                    6:30 pm
                  </option>
                  <option value="6:45 pm">
                    6:45 pm
                  </option>
                  <option value="7:00 pm">
                    7:00 pm
                  </option>
                  <option value="7:15 pm">
                    7:15 pm
                  </option>
                  <option value="7:30 pm">
                    7:30 pm
                  </option>
                  <option value="7:45 pm">
                    7:45 pm
                  </option>
                  <option value="8:00 pm">
                    8:00 pm
                  </option>
                </select>
              </div>
              <input type="submit"
                value="Submit"
                data-wait="Please wait..."
                className="w-button submit btn primary-btn-color" />
            </form>
            <div className="w-form-done">
              <p>
                Thank you! Your submission has been received!
              </p>
            </div>
            <div className="w-form-fail">
              <p>
                Oops! Something went wrong while submitting the form
              </p>
            </div>
          </div>
          <div className="w-form form-wrapper">
            <EventDetailsItem></EventDetailsItem>
            <div className="w-form-done">
              <p>
                Thank you! Your submission has been received!
              </p>
            </div>
            <div className="w-form-fail">
              <p>
                Oops! Something went wrong while submitting the form
              </p>
            </div>
          </div>
        </section>
      </div>
      );
  }
}
;
