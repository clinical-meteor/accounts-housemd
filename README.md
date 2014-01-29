**accounts-housemd** is a Meteorite package to populate your Meteor.users() collection with personalities from the television series House, MD.


------------------------
### Installation

First, install the accounts-famous-dead-people package from the command line, like so:

````
mrt add accounts-housemd
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````js
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "accounts-housemd": {
      "git": "https://github.com/awatson1978/accounts-housemd.git"
    }
  }
}

````


------------------------
### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'allison',
  password: 'allison',
  email: 'allison@test.org',
  profile: {
    name: 'Allison Camron',
    role: 'Physician',
    avatar: '/avatars/allison.camron.jpg'
  }
}
````

------------------------
### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  For the most part, the username and password will both be the person's first name, but a number of users are set as the last name.  All emails will be at the ``test.org`` domain.


------------------------
### Users List

Allison Camron
Eric Foreman
Gregory House
James Wilson
Lawrence Kutner
Lisa Cuddy
Robert Chase
Thirteen

------------------------
### License

Code is MIT License. Use as you wish, including for commercial purposes.  
Images should all be in the public domain.

------------------------
### Support
Found this package to be useful?  Consider tipping the package maintainer for their time!  

[![Support via Gittip](https://raw.github.com/gittip/www.gittip.com/master/www/assets/gittip.png)](https://www.gittip.com/awatson1978/)  

