import React from 'react';
import { Link } from 'param-store';
import PlaceItemSearch from './PlaceItemSearch';
import GooglePlaces from 'react-google-places-component';

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
            <Link href="index.html"
              className="nav-text cancel"
              params={{ path: 'index' }}
            >
              Cancel
            </Link>
          </nav>
          <input id="address-2"
            onChange={this.setQuery.bind(this)}
            type="text"
            placeholder="Address or zip"
            name="address-2"
            data-name="Address 2"
            className="w-input input"
          />
          {
            this.state.query ?
              null :
                  <div className="address-prompt">Type your address or zip</div>
          }
          <div className="address-container">
            <div className="dates-container">
              <GooglePlaces
                options={{ input: this.state.query }}
                itemProps={{ onClick: this.props.setAddress.bind(this) }}
                itemComponent={PlaceItemSearch}
              />
            </div>
          </div>
        </div>
      </div>
      );
  }
}
