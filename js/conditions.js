var apiKey = require('./../.env').apiKey;


function Conditions() {

}

Conditions.prototype.getConditions = function(populateConditions) {
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?fields=name&user_key=' + apiKey).then(function(result) {
    alert('hello');
    console.log(result.data[4].name);
    var allConditions = result.data;
    // var eachCondition = result.data[i].name;
    var nameProperty = name;
    // $('#output-select').append('<option>' + result.data[i].name + '</option>');
    populateConditions(allConditions);
  });
};


exports.conditionsModule = Conditions;
