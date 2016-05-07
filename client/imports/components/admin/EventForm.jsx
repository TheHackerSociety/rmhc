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
    }
  }

  submit(e) {
    e.preventDefault();
    const event = _.clone(this.state)
    event.address = {
      street: event.street,
      zip: event.zip
    }

    delete event.street
    delete event.zip

    Events.insert(event)
    this.setState(this.getMyInitialState());
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
              onChange={(e) => this.setState({place: e.target.value})}
              value={this.state.place}
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
              onChange={(e) => this.setState({ isOpen: true, street: e.target.value })}
              type="text"
              placeholder="Enter Address"
              name="Address-2"
              value={this.state.street}
              data-name="Address 2"
              required="required"
              className="w-input text-field"
            />
            {
              this.state.isOpen
                ? (
                  <div className="address-popout">
                    <GooglePlaces
                      options={{ input: this.state.street }}
                      itemProps={{ onClick: (e, prediction) => {
                        e.preventDefault();
                        const service = new google.maps.places.PlacesService(document.createElement('div'));
                        service.getDetails({
                          placeId: prediction.place_id
                        },  (response) => {
                          const zip = _.find(response.address_components, (component) => {
                            return component.types[0] === 'postal_code'
                          }).long_name;
                          this.setState({
                            street: prediction.description,
                            zip: 'Houston TX ' + zip,
                            isOpen: false
                          })
                        })
                      }}}
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
              className="w-input text-field" />
          </div>
          <div className="w-clearfix input-container date">
            <label htmlFor="field-27">
              Morning Session:
            </label>
            <MorningSelect
              onChange={(e) => this.setState({morningStartTime: e.target.value})}
              value={this.state.morningStartTime}
            />
            <div className="middle-text">
              to
            </div>
            <MorningSelect
              onChange={(e) => this.setState({morningEndTime: e.target.value})}
              value={this.state.morningEndTime} />
          </div>
          <div className="w-clearfix input-container date">
            <label htmlFor="field-29">
              Afternoon Session:
            </label>
            <AfternoonSelect
              onChange={(e) => this.setState({noonStartTime: e.target.value})}
              value={this.state.noonStartTime} />
            <div className="middle-text">
              to
            </div>
            <AfternoonSelect
              onChange={(e) => this.setState({noonEndTime: e.target.value})}
              value={this.state.noonEndTime} />
          </div>
          <input type="submit"
            value="Submit"
            data-wait="Please wait..."
            className="w-button submit btn primary-btn-color" />
        </div>
      </form>
    )
  }
  }
