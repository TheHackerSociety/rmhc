Meteor.publish('events', () => {
  return Events.find();
});
