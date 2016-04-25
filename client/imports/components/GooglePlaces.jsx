import React from 'react';

class GooglePlaces extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      suggestions: null,
    };
  }

  componentWillReceiveProps(props) {
    if (props.query === '') {
      this.setState({ suggestions: '' });
      return false;
    }
    const service = new google.maps.places.AutocompleteService();
    service.getQueryPredictions({ input: props.query }, this.displaySuggestions.bind(this));
    return true;
  }

  displaySuggestions(suggestions) {
    this.setState({ suggestions });
  }

  render() {
    if (this.state.suggestions) {
      return (
        <div>
          {
            React.cloneElement(this.props.itemComponent,
              { suggestions: this.state.suggestions,
                callback: this.props.callback.bind(this),
              })
          }
        </div>
      );
    }
    return (
       <div>
       </div>
    );
  }
}

export default GooglePlaces;
GooglePlaces.propTypes = {
  query: React.PropTypes.string,
  itemComponent: React.PropTypes.element,
  callback: React.PropTypes.func,
};
