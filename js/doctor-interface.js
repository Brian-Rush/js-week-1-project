var apiKey = require('./../.env').apiKey;
var DoctorsObject = require('./../js/doctor.js').doctorModule;
var Conditions = require('./../js/conditions.js').conditionsModule;

// var DoctorModule = function() {
//   this.property = "";
// }
//
// DoctorModule.prototype.doctorModule = function(medicalIssue) {
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
//    .then(function(result) {
//       console.log(result);
//     })
//    .fail(function(error){
//       console.log("fail");
//     });
// };
//
//

//CALL-BACK FUNCTION TO POPULATE THE SELECT MENU
var populateConditions = function(allConditions) {
  // $('#output-select').empty();
  for(i=0; i < allConditions.length; i++) {
    $('#output-select').append('<option value="' + allConditions[i] + '">' + allConditions[i] + '</option>');
  }
};

//Simple callback TEST (to be deleted)
// var appendDoctorDetails = function(listOfDoctors) {
//   for(i=0; i < listOfDoctors.length; i++) {
//     $('.query').append('<div class="doctor-card"><p>TESTING</p></div>');
//   }
// };


// var appendDoctorDetails = function(listOfDoctors, image_url, first_name, last_name, bio) {
//   for(i=0; i < listOfDoctors.length; i++) {
//     $('.query').append('<div class="doctor-card"><div class="doc-pic"><img src="' + image_url + '" alt="' + first_name + ' ' + last_name + ' profile pic"/></div><div class="doc-text"><h4>' + first_name + ' ' + last_name + '</h4><p>' + bio + '</p></div></div>');
//   }
// };


//FRONT END

$(document).ready(function() {

  //Create a new Conditions object
  var instantiatedConditionsObject = new Conditions();

  //Get an alphabetized list of all conditions and populate the select box with them
  instantiatedConditionsObject.getConditions(populateConditions);

  //Create object that will contain an array of all relevant individual doctors
  var instantiatedDoctorsObject = new DoctorsObject();
  // console.log(instantiatedDoctorsObject.);
  // console.log(instantiatedDoctorsObject.firstName);


  //SUBMIT BUTTON LISTENER
  $('#submit-button').click(function(event){
    event.preventDefault();

    //Empty the html display of past results
    $('.query').empty();

    //Declare variable equal to user's typed input
    var query = $('#query').val();
    console.log("query= " + query);

    //Declare variable equal to user's select box choice
    var selectedCondition = $('#output-select').val();
    console.log(selectedCondition);

    instantiatedDoctorsObject.getDoctors(selectedCondition);
    // console.log(instantiatedDoctorsObject.listOfDoctors);

    //Append user's typed input in appropriate places
    $('.initially-hidden').show();
    $('.query').append(selectedCondition);

    // var getConditions = function() {
    //   $.get('https://api.betterdoctor.com/2016-03-01/conditions?fields=name&user_key=' + apiKey).then(function(result) {
    //     alert('hello');
    //     console.log(result.data[4].name);
    //     for (i=0; i < result.data.length; i++) {
    //       console.log(result.data[i].name);
    //       $('#output-select').append('<option>' + result.data[i].name + '</option>');
    //     };
    //   });
    // };


    // var results = instantiatedDoctorsObject.getDoctors(query);
    // console.log(results);
  });





  // var exampleInstance = new ExampleModule('args');

  // console.log(exampleInstance.examplePrototype());
});
