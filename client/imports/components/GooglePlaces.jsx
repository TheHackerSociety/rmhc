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
    if (props.input === '') {
      this.setState({ suggestions: '' });
      return false;
    }
    const service = new google.maps.places.AutocompleteService();
    service.getQueryPredictions({ input: props.input }, this.displaySuggestions.bind(this));
    return true;
  }

  displaySuggestions(suggestions) {
    this.setState({ suggestions });

  }

  render() {
    const self = this;
    if (this.state.suggestions) {
      return (
        <div>
          {
            this.state.suggestions.map((suggestion, index) => {
               return (
                <div key={index}>
                { React.cloneElement(this.props.itemComponent,
                  { itemProps: this.props.itemProps, suggestion})
                }
                  </div>
                 );
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
  itemComponent: React.PropTypes.element,
  itemProps: React.PropTypes.obj,
};
