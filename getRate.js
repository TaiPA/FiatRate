var request = require('request');

var uri = 'https://openexchangerates.org/api/latest.json?app_id=ef7d362d51c34f478b53076686e5a62c'
request.get(uri, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.

    var uri = 'https://fiatrate-ea33f.firebaseio.com/rates.json'
  request.put({url:uri, json:JSON.parse(body)}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
      }
  });
  }
});