import React from 'react';
import { connect } from 'param-store';
import Login from './Login';
import Admin from './Admin';
import { Meteor } from 'meteor/meteor';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Meteor.userId(),
    };
  }

  setUser() {
    const user = Meteor.userId();
    this.setState({ user });
  }

  render() {
    const { path } = this.props.currentParams;
    if (path !== 'login') {
      return null;
    }
    if (this.state.user) {
      return <Admin />;
    }
    return <Login setUser={this.setUser.bind(this)} />;
  }
}
export default connect(LoginContainer, 'path');
