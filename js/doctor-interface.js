// var ExampleModule = require('./../js/scripts.js').exampleModule;
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

var populateConditions = function(allConditions) {
  $('#output-select').empty();
  for(i=0; i < allConditions.length; i++) {
    $('#output-select').append('<option>' + allConditions[i].name + '</option>');
  }
};


//FRONT END

$(document).ready(function() {

  var instantiatedConditionsObject = new Conditions();
  instantiatedConditionsObject.getConditions(populateConditions);

  var instantiatedDoctorsObject = new DoctorsObject("Brian", "Rush", "http://brian-rush.com");
  // console.log(instantiatedDoctorsObject.doctorModule("arthritis"));
  // console.log(instantiatedDoctorsObject.webSite);

  $('#submit-button').click(function(event){
    event.preventDefault();

    var query = $('#query').val();
    // $('#query').val("");
    console.log("query= " + query);
    var selectedCondition = $('#output-select').val();
    console.log(selectedCondition);

    // var location = $('#location').val();
    // $('#location').val("");
    // console.log("location= " + location);

    $('.query').append(query);

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

    getConditions();


    // var results = instantiatedDoctorsObject.getDoctors(query);
    // console.log(results);
  });





  // var exampleInstance = new ExampleModule('args');

  // console.log(exampleInstance.examplePrototype());
});
