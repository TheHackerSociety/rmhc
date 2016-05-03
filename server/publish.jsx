import { Meteor } from 'meteor/meteor';

Meteor.publish('events', () => {
  return Events.find();
});

Meteor.publish('users', () => {
  return Meteor.users.find();
});
