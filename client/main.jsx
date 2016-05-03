import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './imports/components/App.jsx';

Meteor.subscribe('events');
Meteor.subscribe('users');
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
