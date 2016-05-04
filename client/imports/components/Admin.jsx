import React from 'react';
import EventDetailsItem from './EventDetailsItem';
import GooglePlaces from 'react-google-places-component';
import PlaceItem from './PlaceItem';

export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null,
      query: " ",
    };
  }

  setPlace(e) {
    const place = e.target.value;
    this.setState({ place });
  }

  setQuery(e) {
    const query = e.target.value;
    this.setState({ query });
  }


  setAddress(address) {
    console.log(address);

  }

  render() {
    return (
      <div>
        <section className="admin-container">
          <img alt="Ronald McDonald House Charities logo"
            width="178"
            src="images/rmhc-logo.png"
            className="center" />
          <img alt="Ronald McDonald Care Mobile "
            width="280"
            src="images/care-mobile-logo.png"
            className="center care-mobile-logo"
          />
          <div className="w-form">
            <form id="email-form"
              name="email-form"
              data-name="Email Form"
              className="w-clearfix main-form">
              <div className="input-container location">
                <label htmlFor="name">
                  Location Name:
                </label>
                <input id="name"
                  onBlur={this.setPlace.bind(this)}
                  type="text"
                  placeholder="Enter location"
                  name="name"
                  data-name="Name"
                  required="required"
                  className="w-input"
                />
              </div>
              <div className="input-container address">
                <label htmlFor="name-2">
                  Address:
                </label>
                <input id="name-2"
                  onChange={this.setQuery.bind(this)}
                  type="text"
                  placeholder="Enter address"
                  name="name-2"
                  data-name="Name 2"
                  required="required"
                  className="w-input"
                />
               <GooglePlaces
                 options={{ input: this.state.query }}
                 itemProps={{ onClick: this.setAddress.bind(this) }}
                 itemComponent={PlaceItem}
               />
              </div>
              <div className="input-container">
                <label htmlFor="name-5">
                  Date:
                </label>
                <input id="name-5"
                  type="text"
                  placeholder="mm/dd/yy"
                  name="name-5"
                  data-name="Name 5"
                  required="required"
                  className="w-input" />
              </div>
              <div className="w-clearfix input-container date">
                <label className="field-label" htmlFor="time">
                  Morning Start:
                </label>
                <input id="time"
                  type="text"
                  placeholder="9:00"
                  name="time"
                  data-name="time"
                  required="required"
                  className="w-input text-field start" />
                <select id="field"
                  name="field"
                  required="required"
                  className="w-select select-field">
                  <option value="First">
                    am
                  </option>
                  <option value="Second">
                    pm
                  </option>
                </select>
              </div>
              <div className="w-clearfix input-container date">
                <label className="field-label" htmlFor="time-3">
                  Morning End:
                </label>
                <input id="time-3"
                  type="text"
                  placeholder="11:45"
                  name="time-3"
                  data-name="Time 3"
                  required="required"
                  className="w-input text-field end" />
                <select id="field-3"
                  name="field-3"
                  required="required"
                  data-name="Field 3"
                  className="w-select select-field">
                  <option value="First">
                    am
                  </option>
                  <option value="Second">
                    pm
                  </option>
                </select>
              </div>
              <div className="w-clearfix input-container date">
                <label className="field-label" htmlFor="time-2">
                  Afternoon Start:
                </label>
                <input id="time-2"
                  type="text"
                  placeholder="1:00"
                  name="time-2"
                  data-name="Time 2"
                  required="required"
                  className="w-input text-field start" />
                <select id="field-2"
                  name="field-2"
                  required="required"
                  data-name="Field 2"
                  className="w-select select-field">
                  <option value="Second">
                    pm
                  </option>
                  <option value="First">
                    am
                  </option>
                </select>
              </div>
              <div className="w-clearfix input-container date">
                <label className="field-label" htmlFor="time-4">
                  Afternoon End:
                </label>
                <input id="time-4"
                  type="text"
                  placeholder="2:00"
                  name="time-4"
                  data-name="Time 4"
                  required="required"
                  className="w-input text-field end" />
                <select id="field-4"
                  name="field-4"
                  required="required"
                  data-name="Field 4"
                  className="w-select select-field">
                  <option value="Second">
                    pm
                  </option>
                  <option value="First">
                    am
                  </option>
                </select>
              </div>
              <input type="submit"
                value="Add"
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
          </div>
        </section>
      </div>
      );
  }
}
;
