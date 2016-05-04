import React from 'react';

export default class EventDetailsItem extends React.Component {
  render() {
    return (
      <form id="email-form"
        name="email-form"
        data-name="Email Form"
        className="w-clearfix">
        <div className="input-container location">
          <label htmlFor="name-6">
            Location Name:
          </label>
          <input id="name-6"
            type="text"
            placeholder="Enter location"
            name="name-6"
            data-name="Name 6"
            required="required"
            className="w-input" />
        </div>
        <div className="w-clearfix input-container address">
          <label htmlFor="name-7">
            Address:
          </label>
          <input id="name-7"
            type="text"
            placeholder="Enter address"
            name="name-7"
            data-name="Name 7"
            required="required"
            className="w-input" />
        </div>
        <div className="w-clearfix input-container">
          <label htmlFor="name-8">
            Date:
          </label>
          <input id="name-8"
            type="text"
            placeholder="mm/dd/yy"
            name="name-8"
            data-name="Name 8"
            required="required"
            className="w-input" />
        </div>
        <div className="w-clearfix input-container date">
          <label className="field-label" htmlFor="time-5">
            Morning Start:
          </label>
          <input id="time-5"
            type="text"
            placeholder="9:00"
            name="time-5"
            data-name="Time 5"
            required="required"
            className="w-input text-field start" />
          <select id="field-5"
            name="field-5"
            required="required"
            data-name="Field 5"
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
          <label className="field-label" htmlFor="time-6">
            Morning End:
          </label>
          <input id="time-6"
            type="text"
            placeholder="11:45"
            name="time-6"
            data-name="Time 6"
            required="required"
            className="w-input text-field end" />
          <select id="field-6"
            name="field-6"
            required="required"
            data-name="Field 6"
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
          <label className="field-label" htmlFor="time-7">
            Afternoon Start:
          </label>
          <input id="time-7"
            type="text"
            placeholder="1:00"
            name="time-7"
            data-name="Time 7"
            required="required"
            className="w-input text-field start" />
          <select id="field-7"
            name="field-7"
            required="required"
            data-name="Field 7"
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
          <label className="field-label" htmlFor="time-8">
            Afternoon End:
          </label>
          <input id="time-8"
            type="text"
            placeholder="2:00"
            name="time-8"
            data-name="Time 8"
            required="required"
            className="w-input text-field end" />
          <select id="field-8"
            name="field-8"
            required="required"
            data-name="Field 8"
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
          value="Delete"
          data-wait="Please wait..."
          className="w-button submit btn primary-btn-color delete" />
        <input type="submit"
          value="Save"
          data-wait="Please wait..."
          className="w-button submit btn primary-btn-color small" />
      </form>
      );
  }
}
;
