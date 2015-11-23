Package.describe({
  summary: "Adds images from House MD to the Meteor.users collection.",
  // update this value before you run 'meteor publish'
  version: "1.1.2",

  // if this value isn't set, meteor will default to the directory name
  name: "clinical:accounts-housemd",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-housemd.git",

  // only load during local development
  isDebug: true
});

Package.on_use(function (api) {
  api.use('standard-app-packages@1.0.2');
  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.add_files('initialize.users.js', 'server');

  api.addFiles('housemd/allison.camron.jpg', "client");
  api.addFiles('housemd/eric.foreman.jpg', "client");
  api.addFiles('housemd/gregory.house.jpg', "client");
  api.addFiles('housemd/lawrence.kutner.jpg', "client");
  api.addFiles('housemd/lisa.cuddy.jpg', "client");
  api.addFiles('housemd/robert.chase.jpg', "client");
  api.addFiles('housemd/james.wilson.jpg', "client", {isAsset: true});
  api.addFiles('housemd/thirteen.jpg', "client", {isAsset: true});
});
