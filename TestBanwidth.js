var request = require('request');
require('console-stamp')(console, '[yyyy-mm-dd HH:MM:ss.l]')

var uri = 'https://fiatrate-ea33f.firebaseio.com/rates.json'
var i = 0;
setInterval(function() {
    request.get(uri, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            //   			// console.log(body) // Show the HTML for the Google homepage.
            console.log("Get Rates from firebase OK: " + i++);
        }
    });
}, 1000*60*5); // Call every 5 minute
