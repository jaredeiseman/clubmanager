# Club Manager

#### A generic club management app, complete with about, member list, admin area, and members only chatroom.

#### By Jared Eiseman

## Description
An application for tracking the fictional club "something"s members. The application was built using Angular CLI, with Firebase for it's database and hosting. The application includes several views and components including an about section, member list, admin panel in which members can be added and deleted, and a chatroom.

The project is viewable live at https://club-manager-1cecc.firebaseapp.com

## Planning

### User Story
* As a user, I'd like to visit a page to see a list of all team or club members.
* As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As an administrator, I want to add new users to the club. (User authentication is not required).
* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete a user, in case they leave the club or team.

## Setup/Installation Requirements

* Clone the repository (https://github.com/jaredeiseman/clubmanager.git)
* Run 'npm install' in your chosen terminal application
* Run 'bower install' in your chosen terminal application
* Run 'ng serve' in your chosen terminal application for a development server.
  * ng build --prod will create a minified, deployable version of the project in the dist folder at root level
* Login to Firebase and initialize a new project, choosing the option to integrate firebase into web app from the console
* Create 'api-keys.ts' in the src/app/ directory
* Add your firebase credentials to 'api-keys.ts' in the following format:
export var masterFirebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxxx.firebaseio.com",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxx"
};

## Known Bugs

The chatroom does not scroll down upon receipt of message from other chatroom members.

## Support and contact details

For feedback or support contact Jared Eiseman at jathei@gmail.com.

## Technologies Used

* HTML
* CSS
* Sass
* JavaScript
* Angular
* NPM
* Bower

### License

MIT

Copyright (c) 2017 Jared Eiseman
