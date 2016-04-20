import React from 'react';
import { connect } from 'param-store';
import ResultsDate1 from './ResultsDate1';

class ResultsDate1Container extends React.Component {
  render() {
    const style = {
      position: 'absolute'
    };
    if (this.props.currentParams.path !== 'results-date-1') {
      return null;
    }

    return (
      <div style={style}>
        <ResultsDate1 {...this.props}/>
      </div>
      );
  }
}

export default connect(ResultsDate1Container, 'path');
