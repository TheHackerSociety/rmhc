## About
[Ronald McDonald Care Mobile](http://mchodessa.com/ronald-mcdonald-care-mobile/) is a medical clinic on wheels servicing Odessa
neighborhoods with unmet pediatric healthcare needs. This app offers a way to
discover where and when they can receive treatment from the RMCM unit.
This will cater specifically to Houston. The schedule is [here](http://www.texaschildrens.org/sites/default/files/RMCM%202016.pdf).

## Installation
This is a Meteor project, so [install that](https://www.meteor.com/install) first. Fork and clone the repo, navigate to the project directory, and run
meteor --settings settings.json from the command line.
Check out [this article](https://guides.github.com/activities/forking/) for help on forking & contributing to open-source projects.

## End Goal
Create a basic app for viewing the RMCM Unit's schedule by location and date.

## Tasks
1. Create react components from the provided webflow design.
  * run 'stanza -u' in the command line.

2. Write the functionality for the following components:
  * Search.
  * EventsByDate.
  * EventsByLocation.

3. Read the following docs:
  * Read Meteor Docs about [Publications and Subscriptions](http://docs.meteor.com/#/full/meteor_publish)
  * Read Meteor docs for using [Meteor’s data system](http://guide.meteor.com/react.html#data)

4. Search component
  - Use [GooglePlaces](https://github.com/poetic/react-google-places-component) component.

5. EventsByDate component
  - Retrieve events from db.
  - Sort events by date.

6. EventsByLocation component
  - Retrieve events from db.
  - Sort Events By distance. Check [Google's Distance Matrix Service API](https://developers.google.com/maps/documentation/javascript/distancematrix#distance_matrix) for computing distances.
  - Group Events by distance. Check [lodash's groupBy](https://lodash.com/docs#groupBy)

