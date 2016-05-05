Meteor.publish('events', () => {
  const todayDate = new Date();
  return Events.find({date: {$gt: todayDate }});
});
