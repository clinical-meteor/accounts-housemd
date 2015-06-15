// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');
    Meteor.call("initializeUsers");
  }
});



Meteor.methods({
  initializeUsers: function(){
    console.log("initializeUsers()");

    var userId = null;

    // crate our administrator
    userId = Accounts.createUser({
      username: 'allison',
      password: 'allison',
      email: 'allison@test.org',
      profile: {
        fullName: 'Allison Camron',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/allison.camron.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'foreman',
      password: 'foreman',
      email: 'foreman@test.org',
      profile: {
        fullName: 'Eric Foreman',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/eric.foreman.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'house',
      password: 'house',
      email: 'house@test.org',
      profile: {
        fullName: 'Gregory House',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/gregory.house.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'wilson',
      password: 'wilson',
      email: 'wilson@test.org',
      profile: {
        fullName: 'James Wilson',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/james.wilson.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'kutner',
      password: 'kutner',
      email: 'kutner@test.org',
      profile: {
        fullName: 'Lawrence Kutner',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/lawrence.kutner.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'cuddy',
      password: 'cuddy',
      email: 'cuddy@test.org',
      profile: {
        fullName: 'Lisa Cuddy',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/lisa.cuddy.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'chase',
      password: 'chase',
      email: 'chase@test.org',
      profile: {
        fullName: 'Robert Chase',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/robert.chase.jpg'
      }
    });
    console.info('Account created: ' + userId);



    // crate our administrator
    userId = Accounts.createUser({
      username: 'thirteen',
      password: 'thirteen',
      email: 'thirteen@test.org',
      profile: {
        fullName: 'Thirteen',
        role: 'Physician',
        avatar: '/packages/clinical_accounts-housemd/housemd/thirteen.jpg'
      }
    });
    console.info('Account created: ' + userId);
  },
  removeAllUsers: function(){
    Meteor.users.find().forEach(function(user){
      Meteor.users.remove({_id: user._id});
    });
  }
});
