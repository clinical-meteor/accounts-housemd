import { get, has } from 'lodash';
import {  
  Patients,
  Practitioners
} from 'meteor/clinical:hl7-fhir-data-infrastructure';


// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users


Meteor.startup(function () {
  if (process.env.INITIALIZE) {
    console.log('Initializing HouseMD users...');
    Meteor.call("initializeUsers", {});
  }
});



Meteor.methods({
  initializeHouseUsers(options){
    check(options, Match.Maybe(Object));

    console.log('Initializing House MD users...')

    var userId = null;
    var practitionerId = null;

    var users = [
      {
        username: 'camron',
        password: 'camron',
        email: 'camron@test.org',
        profile: {
          fullName: 'Alison Camron',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/allison.camron.jpg',
          gender: 'Female'
        }
      },
      {
        username: 'foreman',
        password: 'foreman',
        email: 'foreman@test.org',
        profile: {
          fullName: 'Eric Foreman',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/eric.foreman.jpg',
          gender: "Male"
        }
      },
      {
        username: 'house',
        password: 'house',
        email: 'house@test.org',
        profile: {
          fullName: 'Gregory House',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/gregory.house.jpg',
          gender: "Male"
        }
      },
      {
        username: 'wilson',
        password: 'wilson',
        email: 'wilson@test.org',
        profile: {
          fullName: 'James Wilson',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/james.wilson.jpg',
          gender: 'Male'
        }
      },
      {
        username: 'kutner',
        password: 'kutner',
        email: 'kutner@test.org',
        profile: {
          fullName: 'Lawrence Kutner',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/lawrence.kutner.jpg',
          gender: 'Male'
        }
      },
      {
        username: 'cuddy',
        password: 'cuddy',
        email: 'cuddy@test.org',
        profile: {
          fullName: 'Lisa Cuddy',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/lisa.cuddy.jpg',
          gender: 'Female'
        }
      },
      {
        username: 'chase',
        password: 'chase',
        email: 'chase@test.org',
        profile: {
          fullName: 'Robert Chase',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/robert.chase.jpg',
          gender: 'Male'
        }
      },
      {
        username: 'thirteen',
        password: 'thirteen',
        email: 'thirteen@test.org',
        profile: {
          fullName: 'Thirteen',
          role: 'Physician',
          avatar: '/packages/clinical_accounts-housemd/housemd/thirteen.jpg',
          gender: 'Female'
        }
      }
    ];

    var today = new Date();

    users.forEach(function(user){
      var newPractitioner = {
        meta: {
          tags: ['test', 'housemd']
        },
        active: true,
        identifier: [],
        telecom: [],
        qualification: [],
        name: [],
        gender: 'unknown',
        photo: []
      };
      if(user.profile){
        newPractitioner.name.push({
          text: user.profile.fullName
        });
        newPractitioner.gender = user.profile.gender;
        newPractitioner.photo.push({
          url: user.profile.avatar
        });
      }
      newPractitioner.identifier.push({
        use: 'username',
        value: user.username,
        system: Meteor.absoluteUrl(),
        assigner: {
          display: "Autogenerated",
          reference: Meteor.absoluteUrl()
        }
      });
      newPractitioner.identifier.push({
        use : "usual",
        type : {
          text : "Medical record number",
          coding : [ 
            {
              system : "http://hl7.org/fhir/v2/0203",
              code : "MR"
            }
          ]
        },
        value : (Math.random() * 10000000)
      });

      newPractitioner.telecom.push({
        system: 'phone',
        use: Random.choice(['home', 'work', 'temp']),
        value: Math.floor(Math.random() * 10000000).toString().substring(3,6) + "-" + Math.floor(Math.random() * 1000000).toString().substring(3,6) + "-" + Math.floor(Math.random() * 10000)
      });

      newPractitioner.qualification.push({
        identifier: [{
          use: Random.choice(['usual', 'official', 'temp']),
          type: {
            text: 'American College of Physicians'
          },
          value: Math.floor(Math.random() * 10000000),
          "period" : {
            start: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            end: new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
          }
        }],
        code: {
          text: Math.floor(Math.random() * 10000000).toFixed(0)
        },
        issuer: {
          display: "American College of Physicians"
        }
      });


      if(has(options, 'asPractitioner')){
        if(typeof Practitioners === "object"){
          if(!Practitioners.findOne({'name.text': user.profile.fullName})){
            practitionerId = Practitioners.insert(newPractitioner);
            console.info('Practitioner created: ' + practitionerId)  
          }  
        }
      }
      if(has(options, 'asUser')){
        if(!Meteor.users.findOne({'profile.name.text': user.profile.fullName})){
          userId = Meteor.users.insert(newPractitioner);
          console.info('User created: ' + userId);  
        }
      }
    });

  },
  initializeUsers: function(options){
    check(options, Match.Maybe(Object));
    console.log('initializeUsers', options);
    
    Meteor.call('initializeHouseUsers', options);

    // if (process.env.Practitioners || options.initializePracitioners) {
    //   if ((Practitioners.find().count() === 0) || (process.env.ADDITIONAL)) {

    //   } else {
    //     console.log('Looks like there are already Practitioners initialized.  Skipping.');
    //   }
    // } else {
    //   // we didn't get specific instructions to save as the HL7 FHIR Practitioner Resource
    //   // so we're just going to add the HouseMD characters as general users
    //   if ((Meteor.users.find().count() === 0) || (process.env.ADDITIONAL)) {
    //   } else {
    //     console.log('Looks like there are already Accounts initialized.  Skipping.');
    //   }

    // }
  },
  removeHouseUsers: function (){
    console.log('-----------------------------------------');
    console.log('Dropping users... ');
    Meteor.users.find({'meta.tags': 'housemd'}).forEach(function(user){
      Meteor.users.remove({_id: user._id});
    });
  },
  removeAllUsers: function (){
    if (process.env.NODE_ENV === 'test') {
      console.log('-----------------------------------------');
      console.log('Dropping users... ');
      Meteor.users.find().forEach(function(user){
        Meteor.users.remove({_id: user._id});
      });
    } else {
      console.log('This command can only be run in a test environment.');
      console.log('Try setting NODE_ENV=test');
    }
  },
  dropUsers: function (){
    if (process.env.NODE_ENV === 'test') {
      console.log('-----------------------------------------');
      console.log('Dropping users... ');
      Meteor.users.find().forEach(function(user){
        Meteor.users.remove({_id: user._id});
      });
    } else {
      console.log('This command can only be run in a test environment.');
      console.log('Try setting NODE_ENV=test');
    }
  }
});
