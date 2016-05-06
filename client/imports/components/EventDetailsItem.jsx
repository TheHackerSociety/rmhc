import React from 'react';

const EventDetailsItem = ({}) => (
  <form id="email-form"
    name="email-form"
    data-name="Email Form"
    className="w-clearfix submissions"
  >
    <div className="input-container location">
      <label className="field-label" htmlFor="Location-4">
        Location Name:
      </label>
      <input id="Location-4"
        type="text"
        placeholder="Enter Location"
        name="Location-4"
        data-name="Location 4"
        required="required"
        className="w-input text-field"
      />
    </div>
    <div className="input-container address">
      <label className="field-label" htmlFor="Address-4">
        Address:
      </label>
      <input id="Address-4"
        type="text"
        placeholder="Enter Address"
        name="Address-4"
        data-name="Address 4"
        required="required"
        className="w-input text-field"
      />
    </div>
    <div className="input-container date-input">
      <label className="field-label" htmlFor="Date-4">
        Date:
      </label>
      <input id="Date-4"
        type="text"
        placeholder="mm/dd/yyyy"
        name="Date-4"
        data-name="Date 4"
        required="required"
        className="w-input text-field"
      />
    </div>
    <div className="w-clearfix input-container date">
      <label className="field-label" htmlFor="field-21">
        Morning Session:
      </label>
      <select id="field-21"
        name="field-21"
        data-name="Field 21"
        className="w-select time-field"
      >
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
      <select id="field-25"
        name="field-25"
        data-name="Field 25"
        className="w-select time-field"
      >
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
      <label className="field-label" htmlFor="field-23">
        Afternoon Session:
      </label>
      <select id="field-23"
        name="field-23"
        data-name="Field 23"
        className="w-select time-field"
      >
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
      <select id="field-26"
        name="field-26"
        data-name="Field 26"
        className="w-select time-field"
      >
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
      value="Save"
      data-wait="Please wait..."
      className="w-button submit btn primary-btn-color small"
    />
    <input type="submit"
      value="Delete"
      data-wait="Please wait..."
      className="w-button submit btn primary-btn-color delete"
    />
  </form>
  );
export default EventDetailsItem;
