import React from 'react';

class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  setAddress(e) {
    this.props.callback(e.target.text);
  }

  render() {
    if (this.props.suggestions) {
      return (
        <div className="address-container">
        {this.props.suggestions.map((suggestion, index) => {
          return (
            <div className="input-container" key={index}>
              <a className="w-inline-block address-option"
                onClick={this.setAddress.bind(this)}
              >
                {suggestion.description}
              </a>
            </div>
          );
        })}
        </div>
      );
    }
    return (<div></div>);
  }
}

export default ItemComponent;
ItemComponent.propTypes = {
  suggestions: React.PropTypes.array,
  callback: React.PropTypes.func,
};
