import React from 'react';
import Geosuggest from 'react-geosuggest';
import ParamStore from 'param-store';

class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  onSuggestSelect(addressObj) {
    this.props.setAddress(addressObj.gmaps.formatted_address);
    ParamStore.set({ path: 'results' });
  }

  render() {
    return (
      <div>
        Search
        <Geosuggest
          className={'results-container'}
          onSuggestSelect={this.onSuggestSelect.bind(this)}
        />
      </div>
    );
  }
}

export default Search;
Search.propTypes = {
  setAddress: React.PropTypes.func,
};
