import React from 'react';

export default class EventItemDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    };
  }


  openWindow() {
    window.open(`https://www.google.com/maps/place/${this.props.event.address.street} ${this.props.event.address.zip}/`, "_system")
  }

  render() {
    return (
      <div className="location-card">
        <div className="w-clearfix location-card-header">
          <div className="w-clearfix date-container">
            <div className="secondary-font-color day">
                {this.state.weekdays[this.props.event.date.getDay()]}
                <br />
                {this.state.months[this.props.event.date.getMonth()]}
            </div>
            <div className="secondary-font-color day-number">
              {this.props.event.date.getDate()}
            </div>
          </div>
        </div>
        <div className="w-clearfix card-info">
          <a href='#'
            target="_blank"
            onClick={this.openWindow.bind(this)}
            className="w-inline-block w-clearfix location-icon"
          >
            <img alt="location icon"
              src="images/location-icon.svg"
            />
          </a>
          <div className="secondary-font-color location-name">
            {this.props.event.place}
          </div>
          <div className="secondary-font-color location-address">
            {this.props.event.address.street}
            <br />
            {this.props.event.address.zip}
          </div>
          <div className="secondary-font-color location-time">
            {this.props.event.morningStartTime}-{this.props.event.morningEndTime}
            <br />
            {this.props.event.noonStartTime}-{this.props.event.noonEndTime}
          </div>
        </div>
      </div>
      );
  }
}
;
