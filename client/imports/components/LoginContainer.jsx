import React from 'react';
import { connect } from 'param-store';
import Login from './Login';

class LoginContainer extends React.Component {
  render() {
    const { path } = this.props.currentParams;
    if (path !== 'login') {
      return null;
    }

    return <Login {...this.props} />;
  }
}

export default connect(LoginContainer, 'path');
LoginContainer.propTypes = {
  currentParams: React.PropTypes.object,
};
