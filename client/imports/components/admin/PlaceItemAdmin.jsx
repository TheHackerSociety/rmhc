import React from 'react';

class PlaceItemAdmin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { prediction } = this.props;
    if (prediction) {
      return (
        <a href="#"
          className="w-inline-block address-option"

        >
          <div onClick={(e) => {this.props.onClick(e, prediction)}}>{prediction.description}</div>
        </a>
      );
    }
    return (<div></div>);
  }
}
export default PlaceItemAdmin;
