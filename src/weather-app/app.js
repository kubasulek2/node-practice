const request = require('request');

const url = 'https://api.darksky.net/forecast/92fc1c30eeeaeff7a1cc5533a13d8f95/37.8267,-122.4233';

request({ url: url }, (error, response) => {
	console.log(response);
});