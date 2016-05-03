Meteor.startup(() => {
    if (Meteor.users.find({}).count() === 0) {
      const options = {
        username: 'rmhc',
        password: 'Welcome1!',
      };
      Accounts.createUser(options);
    }
  });

