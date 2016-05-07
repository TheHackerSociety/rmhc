import React from 'react';
import MorningSelect from './MorningSelect';
import AfternoonSelect from './AfternoonSelect';
import PlaceItemAdmin from './PlaceItemAdmin';
import GooglePlaces from 'react-google-places-component';

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      place: null,
      address: null,
      date: null,
      morningStart: '9:00 am',
      morningEnd: '11:15 am',
      afternoonStart: '1:00 pm',
      afternoonEnd: '2:00 pm',
    };

    this.setAddress = this.setAddress.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  setAddress(address) {
    this.setState({ address });
  }

  setTime(timeObject) {
    this.setState(timeObject);
  }

  render() {
    console.log(this.state)
    return (
      <div className="w-form form-wrapper">
        <div className="w-clearfix main-form">
          <div className="input-container location">
            <label htmlFor="Location-2">
              Location Name:
            </label>
            <input id="Location-2"
              onBlur={(e) => this.setState({ place: e.target.value}) }
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
              onChange={(e) => this.setState({ query: e.target.value })}
              type="text"
              placeholder="Enter Address"
              name="Address-2"
              data-name="Address 2"
              required="required"
              className="w-input text-field"
            />
            <div className="address-popout">
              <GooglePlaces
                options={{ input: this.state.query }}
                itemProps={{ onClick: this.setAddress }}
                itemComponent={PlaceItemAdmin}
              />
            </div>
          </div>
          <div className="input-container date-input">
            <label htmlFor="Date-2">
              Date:
            </label>
            <input id="Date-2"
              onBlur={(e) => this.setState({ date: e.target.value })}
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
            <MorningSelect
              setTime={this.setTyime}
              timeKey={"morningStart"}
              defaultTime={this.state.morningStart}
            />
            <div className="middle-text">
              to
            </div>
            <MorningSelect
              setTime={this.setTyime}
              timeKey={"morningStart"}
              defaultTime={this.state.morningEnd} />
          </div>
          <div className="w-clearfix input-container date">
            <label htmlFor="field-29">
              Afternoon Session:
            </label>
            <AfternoonSelect
              setTime={this.setTyime}
              timeKey={"morningStart"}
              defaultTime={this.state.afternoonStart} />
            <div className="middle-text">
              to
            </div>
            <AfternoonSelect
              setTime={this.setTyime}
              timeKey={"morningStart"}
              defaultTime={this.state.afternoonEnd} />
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
