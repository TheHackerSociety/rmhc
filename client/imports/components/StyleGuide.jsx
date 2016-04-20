import React from 'react';

export default class StyleGuide extends React.Component {
  render() {
    return (
      <div>
        <a href="#" className="w-button btn">Button Text</a><a href="#" className="w-button btn">Button Text</a>
        <div className="secondary-btn-color" />
        <div className="primary-btn-color" />
        <div className="primary-font-color">
          This is some text inside of a div block.
        </div>
        <div>
          This is some text inside of a div block.
        </div>
      </div>
      );
  }
}
;
