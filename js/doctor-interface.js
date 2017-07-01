// var ExampleModule = require('./../js/scripts.js').exampleModule;
// var apiKey = require('./../.env').apiKey;
var DoctorsObject = require('./../js/doctor.js').doctorModule;

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


//FRONT END

$(document).ready(function() {


  var instantiatedDoctorsObject = new DoctorsObject("Brian", "Rush", "http://brian-rush.com");
  // console.log(instantiatedDoctorsObject.doctorModule("arthritis"));
  console.log(instantiatedDoctorsObject.webSite);

  $('#submit-button').click(function(event){
    event.preventDefault();

    var query = $('#query').val();
    // $('#query').val("");
    console.log("query= " + query);

    // var location = $('#location').val();
    // $('#location').val("");
    // console.log("location= " + location);

    $('.query').append(query);

    var test = function() {
      $.get('https://api.betterdoctor.com/2016-03-01/conditions?fields=name&user_key=679d615f4427f455b59f5d4a410aebe5').then(function(result) {
        alert('hello');
        console.log(result.data[4].name);
        for (i=0; i < result.data.length; i++) {
          console.log(result.data[i].name);
          $('#output-select').append('<option>' + result.data[i].name + '</option>');
        };
      });
    };

    test();


    // var results = instantiatedDoctorsObject.getDoctors(query);
    // console.log(results);
  });





  // var exampleInstance = new ExampleModule('args');

  // console.log(exampleInstance.examplePrototype());
});
