import React from 'react';
import { connect } from 'param-store';
import StyleGuide from './StyleGuide';

class StyleGuideContainer extends React.Component {
  render() {
    const style = {
      position: 'absolute'
    };
    if (this.props.currentParams.path !== 'style-guide') {
      return null;
    }

    return (
      <div style={style}>
        <StyleGuide {...this.props}/>
      </div>
      );
  }
}

export default connect(StyleGuideContainer, 'path');
