import React from 'react';
import MorningSelect from './MorningSelect';
import AfternoonSelect from './AfternoonSelect';
import PlaceItemAdmin from './PlaceItemAdmin';

export default class EventForm extends React.Component {
  render() {
    return (
      <div className="w-form form-wrapper">
        <div className="w-clearfix main-form">
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
              className="w-input text-field"
            />
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
              className="w-input text-field"
            />
            <div className="address-popout">
            </div>
          </div>
          <div className="input-container date-input">
            <label htmlFor="Date-2">
              Date:
            </label>
            <input id="Date-2"
              type="date"
              placeholder="mm/dd/yyyy"
              name="Date-2"
              data-name="Date 2"
              required="required"
              className="w-input text-field"
            />
          </div>
          <div className="w-clearfix input-container date">
            <label htmlFor="field-27">
              Morning Session:
            </label>
            <MorningSelect />
            <div className="middle-text">
              to
            </div>
            <MorningSelect />
          </div>
          <div className="w-clearfix input-container date">
            <label htmlFor="field-29">
              Afternoon Session:
            </label>
            <AfternoonSelect />
            <div className="middle-text">
              to
            </div>
            <AfternoonSelect />
          </div>
          <input type="submit"
            value="Submit"
            data-wait="Please wait..."
            className="w-button submit btn primary-btn-color"
          />
        </div>
      </div>
    )
  }
  }
