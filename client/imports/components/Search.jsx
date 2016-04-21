import React from 'react';
import ParamStore from 'param-store';
import Geosuggest from 'react-geosuggest';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  onSuggestSelect() {
    ParamStore.set({ path: 'events-by-location' });
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
          <div className="address-input">
            <div className="w-form">
              <form id="email-form"
                name="email-form"
                data-name="Email Form"
                className="w-clearfix">
              <Geosuggest
                onSuggestSelect={this.onSuggestSelect.bind(this)}
                inputClassName="w-input input"
                inputWrapperClassName="address-input"
                itemClassName="w-inline-block address-option"
                componentWrapperClassName="container"
                />
                 <img alt="target icon" src="images/input-icon.svg" className="address-icon" />
              </form>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

                //<input id="address"
                  //type="text"
                  //placeholder="Address or zip"
                  //name="address"
                  //data-name="address"
                  //className="w-input input"
                ///>

