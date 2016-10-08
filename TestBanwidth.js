var request = require('request');
var uri = 'https://fiatrate-ea33f.firebaseio.com/rates.json'
var i = 0;
setInterval(function() {
    request.get(uri, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            //   			// console.log(body) // Show the HTML for the Google homepage.
            console.log(i++);
        }
    });
}, 2000);
