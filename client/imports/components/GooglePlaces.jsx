import React from 'react';

class GooglePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = { predictions: [] };
  }

  componentWillReceiveProps(props) {
    const { options } = props
    if (!options.input) {
      this.setState({ predictions: [] });
      return false;
    }
    const service = new google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      options,
      (predictions = []) => {
        this.setState({ predictions  });
      }
    );
    return true;
  }

  render() {
    const {itemProps, itemComponent, ...other} = this.props
    const ItemComponent = itemComponent;

    return (
      <div {...other}>
        {
          this.state.predictions.map((prediction, index) => {
            return (
              <ItemComponent key={index} prediction={prediction} {...itemProps}/>
            );
          })
        }
      </div>
    );
  }
}

export default GooglePlaces;
GooglePlaces.propTypes = {
  options: React.PropTypes.object.isRequired,
  itemProps: React.PropTypes.object.isRequired,
  itemComponent: React.PropTypes.func,
};
