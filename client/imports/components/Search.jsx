import React from 'react';
import ParamStore from 'param-store';
import GooglePlaces from 'react-google-places-component';
import ItemComponent from './ItemComponent.jsx';

export default class Search extends React.Component {
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
      <div className="body-color">
        <div className="container">
          <nav>
            <a href="index.html"
              className="nav-text cancel"
              onClick={e => {
                ParamStore.set({ path: 'index' });
                e.preventDefault();
              }}
            >
              Cancel
            </a>
          </nav>
          {
            this.state.query ?
              null :
              <div className="address-prompt">Type you address or zip,
                <br /> or use your location
              </div>
          }
          <GooglePlaces
            options={{ input: this.state.query }}
            itemProps={{ onClick: this.props.setAddress.bind(this) }}
            itemComponent={ItemComponent}
          />
          <div className="address-input">
            <input id="address-2"
              onChange={this.setQuery.bind(this)}
              type="text"
              placeholder="Address or zip"
              name="address-2"
              data-name="Address 2"
              className="w-input input"
            />
            <img alt="target icon"
              src="images/input-icon.svg"
              className="address-icon"
            />
          </div>
        </div>
      </div>
      );
  }
}
export default Search;
Search.propTypes = {
  setAddress: React.PropTypes.func,
};
