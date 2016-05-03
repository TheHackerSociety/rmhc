
Meteor.startup(() => {
  if (Events.find().count() === 0) {
    console.log('Importing seed.json to db');
    const data = JSON.parse(Assets.getText('seed.json'));
    data.forEach((item) => {
      Events.insert(item);
    });
  }
});
