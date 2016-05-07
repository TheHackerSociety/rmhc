import React from 'react';
import { connect } from 'param-store';
import { createContainer } from 'meteor/react-meteor-data';
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

const AdminWithData = createContainer({
  events: Events.find().fetch()
}, AdminContainer)

export default connect(AdminWithData, 'path');

AdminContainer.propTypes = {
  currentParams: React.PropTypes.object,
};
