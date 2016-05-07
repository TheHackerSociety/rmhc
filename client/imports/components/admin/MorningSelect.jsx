import React from 'react';

export default class MorningSelect extends React.Component {

  selectTime(e){
    const timeObject = {}
    timeObject[this.props.timeKey.toString()] = e.target.value;
    this.props.setTime(timeObject);
  }

  render() {
    return (
      <select
        onChange={this.selectTime.bind(this)}
        defaultValue={this.props.defaultTime}
        id="field-27"
        name="field-27"
        data-name="Field 27"
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
    )
  }
}
