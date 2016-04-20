import React from 'react';
import IndexContainer from './IndexContainer';
import InformationContainer from './InformationContainer';
import Location2Container from './Location2Container';
import Location3Container from './Location3Container';
import ResultsDate1Container from './ResultsDate1Container';
import StyleGuideContainer from './StyleGuideContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <IndexContainer/>
        <InformationContainer/>
        <Location2Container/>
        <Location3Container/>
        <ResultsDate1Container/>
        <StyleGuideContainer/>
      </div>
      );
  }
}
