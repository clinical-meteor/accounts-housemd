Package.describe({
  summary: "Adds images from House MD to the Meteor.users collection."
});

Package.on_use(function (api) {
  api.add_files('bootstrap.users.js', 'server');

  api.add_files('housemd/allison.camron.jpg', "client", {isAsset: true});
  api.add_files('housemd/eric.foreman.jpg', "client", {isAsset: true});
  api.add_files('housemd/gregory.house.jpg', "client", {isAsset: true});
  api.add_files('housemd/james.wilson.jpg', "client", {isAsset: true});
  api.add_files('housemd/lawrence.kutner.jpg', "client", {isAsset: true});
  api.add_files('housemd/lisa.cuddy.jpg', "client", {isAsset: true});
  api.add_files('housemd/robert.chase.jpg', "client", {isAsset: true});
  api.add_files('housemd/thirteen.jpg', "client", {isAsset: true});
});




