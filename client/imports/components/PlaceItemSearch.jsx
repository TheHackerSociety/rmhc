import React from 'react';

export default class PlaceItemSearch extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  setAddress(e) {
    this.props.onClick(e.target.text);
  }

  render() {
    const {prediction} = this.props;
     if (prediction) {
        return (
              <a href='#' className="w-inline-block address-option"
                onClick={this.setAddress.bind(this)}
              >
              {prediction.description}
              </a>
        );
    }
    return (<div></div>);
  }
}
