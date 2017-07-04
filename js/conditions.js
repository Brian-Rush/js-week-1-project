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

    //Sort the list into alphabetical order
    this.arrayOfConditions = this.arrayOfConditions.sort();

    //Call the front-end call-back to populate the select menu
    populateConditions(this.arrayOfConditions);
  });
};

exports.conditionsModule = Conditions;
