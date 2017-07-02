//business logic for retrieving doctor info
var apiKey = require('./../.env').apiKey;
console.log("the key is " + apiKey);

function DoctorsObject(firstName, lastName, location, specialties, photo, url) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + lastName;
  this.location = location;
  this.specialties = specialties;
  this.photo = photo;
  this.webSite = url;
}

DoctorsObject.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
    //  var doctorFirstName = result.data.
    //  var doctorName = result.data.
     //this should eventually be a call-back function defined in the front end

     console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = DoctorsObject;


// var ExampleModule = function(args) {
//   this.args = args; //to be replaced with constructor arguments
// };
//
// ExampleModule.prototype.examplePrototype = function() {
//   return `this is an example prototype method`;
// };
//
// exports.exampleModule = ExampleModule;
