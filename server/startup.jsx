
Meteor.startup(() => {
  //if (Events.find().count() === 0) {
    //console.log('Importing seed.json to db');
    //const data = JSON.parse(Assets.getText('seed.json'));
    //data.forEach((item) => {
      //Events.insert(item);
    //});
  //}

  if (Meteor.users.find({}).count() === 0) {
    const options = {
      username: 'rmhc',
      password: 'Welcome1!',
    };
    Accounts.createUser(options);
  }
});
