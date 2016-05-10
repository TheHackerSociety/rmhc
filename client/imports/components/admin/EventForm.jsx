import React from 'react';
import MorningSelect from './MorningSelect';
import AfternoonSelect from './AfternoonSelect';
import PlaceItemAdmin from './PlaceItemAdmin';
import GooglePlaces from 'react-google-places-component';

export default class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getMyInitialState();
  }

  getMyInitialState() {
    return {
      place: '',
      street: '',
      zip: '',
      date: '',
      morningStartTime: '9:00 am',
      morningEndTime: '11:15 am',
      noonStartTime: '1:00 pm',
      noonEndTime: '2:00 pm',
      haveMorning: true,
      haveEvening: true,
      selection:'',
    };
  }

  submit(e) {
    e.preventDefault();
    const event = _.clone(this.state);
    event.address = {
      street: event.street,
      zip: event.zip,
    };

    if (!event.haveMorning) {
      event.morningStartTime = '';
      event.morningEndTime = '';
    }

    if (!event.haveEvening) {
      event.noonStartTime = '';
      event.noonEndTime = '';
    }

    delete event.street;
    delete event.haveMorning;
    delete event.haveEvening;
    delete event.zip;

    Events.insert(event);
    this.setState(this.getMyInitialState());
  }

  getAddressDetails(e, prediction) {
    e.preventDefault();
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({
      placeId: prediction.place_id,
    }, (response) => {
      const streetExist = _.find(response.address_components, (component) => (
        component.types[0] === 'street_number'
      ));
      if (!streetExist) {
        alert('Please provide a street address');
        return false;
      }
      const streetNumber = streetExist ? streetExist.short_name : '';
      const streetRoute = _.find(response.address_components, (component) => (
        component.types[0] === 'route'
      )).short_name;
      const zip = _.find(response.address_components, (component) => (
        component.types[0] === 'postal_code'
      )).long_name;
      const city = _.find(response.address_components, (component) => (
         component.types[0] === 'locality'
      )).short_name;
      const state = _.find(response.address_components, (component) => (
         component.types[0] === 'administrative_area_level_1'
      )).short_name;

      this.setState({
        selection: prediction.description,
        street: `${streetNumber} ${streetRoute}`,
        zip: `${city} ${state} ${zip}`,
        isOpen: false,
      });
    });
  }

  render() {
    return (
      <form className="w-form form-wrapper" onSubmit={(e) => this.submit(e)}>
        <div className="w-clearfix main-form">
          <div className="input-container location">
            <label htmlFor="Location-2">
              Location Name:
            </label>
            <input id="Location-2"
              onChange={(e) => this.setState({ place: e.target.value })}
              value={this.state.place}
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
              onChange={(e) => this.setState({
                isOpen: true,
                street: e.target.value,
                selection: e.target.value,
              })}
              type="text"
              placeholder="Enter Address"
              name="Address-2"
              value={this.state.selection}
              data-name="Address 2"
              required="required"
              className="w-input text-field"
            />
            {
              this.state.isOpen
                ? (
                  <div className="address-popout">
                    <GooglePlaces
                      options={{ input: this.state.street, types: ['address'] }}
                      itemProps={{ onClick: (e, prediction) =>
                        this.getAddressDetails(e, prediction) }}
                      itemComponent={PlaceItemAdmin}
                    />
                  </div>
                  )
                  : null
            }
          </div>
          <div className="input-container date-input">
            <label htmlFor="Date-2">
              Date:
            </label>
            <input id="Date-2"
              onChange={(e) => this.setState({ date: e.target.value })}
              value={this.state.date}
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
              <input type="checkbox"
                checked={this.state.haveMorning}
                onChange={(e) => {
                  this.setState({
                    haveMorning: e.target.checked,
                  });
                }
                }
              />
                </label>
                {
                  this.state.haveMorning ?
                    <div>
                      <MorningSelect
                        onChange={(e) => this.setState({ morningStartTime: e.target.value })}
                        value={this.state.morningStartTime}
                      />
                      <div className="middle-text">
                        to
                      </div>
                      <MorningSelect
                        onChange={(e) => this.setState({ morningEndTime: e.target.value })}
                        value={this.state.morningEndTime}
                      />
                    </div>
                    : null
                    }
                  </div>
                  <div className="w-clearfix input-container date">
                    <label htmlFor="field-29">
                      Afternoon Session:
                      <input type="checkbox"
                        checked={this.state.haveEvening}
                        onChange={(e) => {
                          this.setState({
                            haveEvening: e.target.checked,
                          });
                        }
                        }
                      />
                    </label>
                      {
                        this.state.haveEvening ?
                        <div>
                          <AfternoonSelect
                            onChange={(e) => this.setState({ noonStartTime: e.target.value })}
                            value={this.state.noonStartTime}
                          />
                          <div className="middle-text">
                            to
                          </div>
                          <AfternoonSelect
                            onChange={(e) => this.setState({ noonEndTime: e.target.value })}
                            value={this.state.noonEndTime}
                          />
                        </div> :
                          null
                      }
                  </div>
          <input type="submit"
            value="Submit"
            data-wait="Please wait..."
            className="w-button submit btn primary-btn-color"
          />
        </div>
      </form>
    );
  }
  }
