import React from 'react';

class ItemComponent extends React.Component {
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
          <div className="address-container">
            <div className="input-container">
              <a href='#' className="w-inline-block address-option"
                onClick={this.setAddress.bind(this)}
              >
              {prediction.description}
              </a>
            </div>
          </div>
        );
    }
    return (<div></div>);
  }
}

export default ItemComponent;
ItemComponent.propTypes = {
  itemProps: React.PropTypes.object,
  suggestion: React.PropTypes.object,
};
