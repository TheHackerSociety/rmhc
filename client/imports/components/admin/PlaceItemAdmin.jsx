import React from 'react';

export default class PlaceItemAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.setAddress = this.setAddress.bind(this);
  }

  setAddress(e) {
    console.log(e.target.innerHTML);
    this.props.onClick(e.target.innerHTML);
  }

  render() {
    const { prediction } = this.props;
    if (prediction) {
      return (
        <a href="#"
          className="w-inline-block address-option"

        >
          <div onClick={this.setAddress}>{prediction.description}</div>
        </a>
      );
    }
    return (<div></div>);
  }
}
export default PlaceItemAdmin;
