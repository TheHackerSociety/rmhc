import React from 'react';

class GooglePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: [] };
  }

  componentWillReceiveProps(props) {
    if (!props.input) {
      this.setState({ suggestions: [] });
      return false;
    }
    const service = new google.maps.places.AutocompleteService();
    service.getQueryPredictions(
      { input: props.input },
      (suggestions = []) => {
        this.setState({ suggestions });
      }
    );
    return true;
  }

  render() {
    const {itemProps, itemComponent, ...other} = this.props
    const ItemComponent = itemComponent;
    console.log(this.state.suggestions)

    return (
      <div {...other}>
        {
          this.state.suggestions.map((suggestion, index) => {
            return (
              <ItemComponent key={index} suggestion={suggestion} {...itemProps}/>
            );
          })
        }
      </div>
    );
  }
}

export default GooglePlaces;
GooglePlaces.propTypes = {
  itemComponent: React.PropTypes.func,
  itemProps: React.PropTypes.obj,
};
