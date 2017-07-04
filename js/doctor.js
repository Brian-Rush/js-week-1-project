//business logic for retrieving doctor info
var apiKey = require('./../.env').apiKey;

function DoctorsObject() {
  this.listOfDoctors = [];
}

DoctorsObject.prototype.getDoctors = function(medicalIssue, appendDoctorDetails) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then((result) => {
    var doctorList = result.data;
    this.listOfDoctors = [];
    for(i=0; i < doctorList.length; i++) {
      appendDoctorDetails(result.data[i].profile.image_url, result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].profile.bio);
    }
  }).fail(function(error){
      alert("I'm sorry, something's gone wrong! Please try again later.");
    });
};

exports.doctorModule = DoctorsObject;
