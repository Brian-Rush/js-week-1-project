// Require / import necessary modules
var apiKey = require('./../.env').apiKey;
var DoctorsObject = require('./../js/doctor.js').doctorModule;
var Conditions = require('./../js/conditions.js').conditionsModule;

//CALL-BACK FUNCTION TO POPULATE THE SELECT MENU
var populateConditions = function(allConditions) {
  // $('#output-select').empty();
  for(i=0; i < allConditions.length; i++) {
    $('#output-select').append('<option value="' + allConditions[i] + '">' + allConditions[i] + '</option>');
  }
};


//CALL-BACK FUNCTION TO PUSH DOCTOR OBJECTS TO DOCTOR COLLECTION
var appendDoctorDetails = function(image_url, first_name, last_name, bio) {
    $('.query').append('<div class="doctor-card"><div class="doc-pic"><img src="' + image_url + '" alt="' + first_name + ' ' + last_name + ' profile pic"/></div><div class="doc-text"><h4>' + first_name + ' ' + last_name + '</h4><p>' + bio + '</p></div></div>');
};

var emptyOutput = function() {
  $('.output').empty();
};


//FRONT END

$(document).ready(function() {

  //Create a new Conditions object
  var instantiatedConditionsObject = new Conditions();

  //Get an alphabetized list of all conditions and populate the select box with them
  instantiatedConditionsObject.getConditions(populateConditions);


  //Create object that will contain an array of all relevant individual doctors
  var instantiatedDoctorsObject = new DoctorsObject();

  //SUBMIT BUTTON LISTENER
  $('#submit-button').click(function(event){
    event.preventDefault();

    //Empty the span of past conditions
    $('.query').empty();

    //Empty the output area
    $('.output').empty();

    //Declare variable equal to user's select box choice
    var selectedCondition = $('#output-select').val();
    console.log(selectedCondition);


    instantiatedDoctorsObject.getDoctors(selectedCondition, appendDoctorDetails);
    console.log(instantiatedDoctorsObject.listOfDoctors);

    //Append user's typed input in appropriate places
    $('.initially-hidden').show();
    $('.query').append(selectedCondition);
  });
});
