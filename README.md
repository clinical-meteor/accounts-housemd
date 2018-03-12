##clincal:accounts-housemd

Meteor package to populate your Meteor.users() collection with personalities from the television series House, MD.


===============================
#### Installation

First, install the accounts-famous-dead-people package from the command line, like so:

````bash
# to add House MD users to your application
meteor add clinical:accounts-housemd

# to initialize House MD users
INITIALIZE=true meteor

# to initialize fHouse MD doctors using the HL7 FHIR Practitioner resource
INITIALIZE=true Practitioners=true meteor
````

===============================
#### Meteor Methods


````js
# initializeUsers()
Meteor.call('initializeHouseUsers', {
  asPractitioners: true,
  asUsers: true
});

# removeHouseUsers()
Meteor.call('removeHouseUsers', {
  practitioners: true,
  users: true
});
````  

===============================
#### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'camron',
  password: 'camron',
  email: 'camron@test.org',
  profile: {
    name: 'Allison Camron',
    role: 'Physician',
    avatar: '/packages/clinical_accounts-housemd/housemd/allison.camron.jpg'
  }
}
````

===============================
#### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  For the most part, the username and password will both be the person's first name, but a number of users are set as the last name.  All emails will be at the ``test.org`` domain.


===============================
#### Users List

Allison Camron  
Eric Foreman  
Gregory House  
James Wilson  
Lawrence Kutner  
Lisa Cuddy  
Robert Chase  
Thirteen

===============================
#### Example Usage  

````html
{{#each userList}}
  {{profile.name}}<br>
{{/each}}
````

````js
if (Meteor.isClient) {
  Meteor.subscribe("users");

  Template.registerHelper('userList', function(){
    return Meteor.users.find();
  });
}

if (Meteor.isServer) {
  Meteor.publish("users", function(){
    return Meteor.users.find();
  });
}
````

===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

Images may be restricted by Fox Media.  Best to only use this package for testing purposes.
