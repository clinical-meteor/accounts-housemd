Package.describe({
  summary: 'Adds images from House MD to the Meteor.users collection.',
  version: '2.2.5',
  name: 'clinical:accounts-housemd',
  git: 'http://github.com/awatson1978/accounts-housemd.git',
  isDebug: true
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('meteor-platform');

  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.use('clinical:hl7-resource-practitioner');
  api.imply('clinical:hl7-resource-practitioner');

  api.addFiles('server/initialize.js', 'server');

  api.addFiles('housemd/allison.camron.jpg', 'client', {isAsset: true});
  api.addFiles('housemd/eric.foreman.jpg', 'client', {isAsset: true});
  api.addFiles('housemd/gregory.house.jpg', 'client', {isAsset: true});
  api.addFiles('housemd/lawrence.kutner.jpg', 'client', {isAsset: true});
  api.addFiles('housemd/lisa.cuddy.jpg', 'client', {isAsset: true});
  api.addFiles('housemd/robert.chase.jpg', 'client', {isAsset: true});
  api.addFiles('housemd/james.wilson.jpg', 'client', {isAsset: true});
  api.addFiles('housemd/thirteen.jpg', 'client', {isAsset: true});
});
