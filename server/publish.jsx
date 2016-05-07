Meteor.publish('events', () => {
  const todayDate = new Date();
  return Events.find({ date: { $gt: todayDate } });
});
Meteor.publish('users', () => (
  Meteor.users.find()
));
