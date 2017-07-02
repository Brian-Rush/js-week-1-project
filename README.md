# Portland Doctor Finder

## Description
This is a web app that helps users find doctors in the Portland area who can help with their particular medical issue.

## Setup/Installation Instructions
* Clone the repo.
* Navigate to the cloned directory in Terminal.
* Create a file named ".env" in the top level of the cloned directory, and paste this code there:

exports.apiKey = "YOUR-API-KEY-GOES-HERE";

 This is where you will insert your own API key. See next step...
* To get your own API key, visit the [BetterDoctor API site](https://developer.betterdoctor.com/) and click "Get a free API key".
* Fill out the form.
* Your API key should be listed on the front page (ex: “a2c356ibgh44…..”) or under My Account > Applications. Copy the key.
* Paste the key into the appropriate location in your previously created .env file.
* [Install Node](https://nodejs.org/en/download/package-manager/ "Node installation documentation") and [initialize Node Package Manager](https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/introducing-npm-and-gulp) (npm).
* In Terminal, type "npm install" to install the necessary back-end dependencies.
* In Terminal, type "bower install" to install the necessary front-end dependencies.
* In Terminal, type "gulp build" to build js and css files to be included
* In Terminal, type "gulp serve" to launch the development server and view the project in your browser (Chrome is recommended)

## Known bugs

* There are no known bugs at this time.


## Technologies Used

_HTML, CSS, SASS, JavaScript, JQuery_
_Node, Gulp, Bower_

### License

MIT

©2017 **Brian Rush**
