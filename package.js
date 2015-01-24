Package.describe({
  summary: "Adds images from House MD to the Meteor.users collection.",
  // update this value before you run 'meteor publish'
  version: "1.0.0",

  // if this value isn't set, meteor will default to the directory name
  name: "clinical:accounts-housemd",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-housemd.git"
});

Package.on_use(function (api) {
  api.add_files('bootstrap.users.js', 'server');

  api.addFiles('housemd/allison.camron.jpg', "client", {isAsset: true});
  api.addFiles('housemd/eric.foreman.jpg', "client", {isAsset: true});
  api.addFiles('housemd/gregory.house.jpg', "client", {isAsset: true});
  api.addFiles('housemd/lawrence.kutner.jpg', "client", {isAsset: true});
  api.addFiles('housemd/lisa.cuddy.jpg', "client", {isAsset: true});
  api.addFiles('housemd/robert.chase.jpg', "client", {isAsset: true});
  //api.addFiles('housemd/james.wilson.jpg', "client", {isAsset: true});
  //api.addFiles('housemd/thirteen.jpg', "client", {isAsset: true});
});
