var apiKey = require('./../.env').apiKey;


function Conditions() {
  this.arrayOfConditions = [];
}

Conditions.prototype.getConditions = function(populateConditions) {
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?fields=name&user_key=' + apiKey).then((result) => {
    var allConditions = result.data;
    for(i=0; i < allConditions.length; i++) {
      this.arrayOfConditions.push(result.data[i].name);
    }
    this.arrayOfConditions = this.arrayOfConditions.sort();
    console.log(this.arrayOfConditions);
    // var alphabeticalConditions = result.data[i].name.sort();
    // console.log(alphabeticalConditions);
    // console.log(result.data[4].name);
    // var eachCondition = result.data[i].name;
    // var nameProperty = name;
    // $('#output-select').append('<option>' + result.data[i].name + '</option>');
    populateConditions(this.arrayOfConditions);
  });
};

Conditions.prototype.alphabetizeConditions = function() {
  // var alphabetizedList =
};



exports.conditionsModule = Conditions;
