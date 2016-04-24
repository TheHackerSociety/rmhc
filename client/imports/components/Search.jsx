import React from 'react';
import GooglePlaces from './GooglePlaces.jsx';
import ParamStore from 'param-store';
import ItemComponent from './ItemComponent.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log();
    this.state = {
      query: '',
    };
  }

  setQuery(e) {
    const query = e.target.value;
    this.setState({ query });
  }

  render() {
    return (
      <div>
        <div id='results'></div>
        <GooglePlaces
          query={this.state.query}
          itemComponent={<ItemComponent/>}
          callback={this.props.setAddress.bind(this)}
        />
        <input onChange={this.setQuery.bind(this)} />
      </div>
    );
  }
}

export default Search;
Search.propTypes = {
  setAddress: React.PropTypes.func,
};
