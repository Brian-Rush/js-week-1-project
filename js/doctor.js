//business logic for retrieving doctor info
var apiKey = require('./../.env').apiKey;
console.log("the key is " + apiKey);



function DoctorsObject() {
  this.listOfDoctors = [];
  // this.firstName = firstName;
  // this.lastName = lastName;
  // this.fullName = firstName + lastName;
  // this.location = location;
  // this.specialties = specialties;
  // this.photo = photo;
  // this.webSite = url;
}

DoctorsObject.prototype.getDoctors = function(medicalIssue, appendDoctorDetails) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then((result) => {
    var doctorList = result.data;
    // var otherThenFunction = (result) => {
    //
    // };
    this.listOfDoctors = [];
    for(i=0; i < doctorList.length; i++) {
    //   this.listOfDoctors.push(result.data[i].profile);
      // console.log(result.data[i].profile);
      // console.log(this.listOfDoctors);

      // $('.output').append('<div class="doctor-card"><div class="doc-pic"><img src="' + result.data[i].profile.image_url + '" alt="' + result.data[i].profile.first_name + ' ' + result.data[i].profile.last_name + ' profile pic"/></div><div class="doc-text"><h4>' + result.data[i].profile.first_name + ' ' + result.data[i].profile.last_name + '</h4><p>' + result.data[i].profile.bio + '</p></div></div>');

      // appendDoctorDetails();
      appendDoctorDetails(result.data[i].profile.image_url, result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].profile.bio);
    }
  }).fail(function(error){
      alert("I'm sorry, something's gone wrong! Please try again later.");
      console.log("fail");
    });

    //Now call the call-back function that appends them
};

exports.doctorModule = DoctorsObject;
