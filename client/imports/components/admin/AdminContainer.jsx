import React from 'react';
import { connect } from 'param-store';
import Admin from './Admin';

class AdminContainer extends React.Component {
  render() {
    const { path } = this.props.currentParams;
    if (path !== 'xxx') {
      return null;
    }

    return <Admin {...this.props} />;
  }
}

export default connect(AdminContainer, 'path');
AdminContainer.propTypes = {
  currentParams: React.PropTypes.object,
};
