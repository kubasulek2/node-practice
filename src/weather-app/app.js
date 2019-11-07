const request = require('request');

require('dotenv').config();


const handleWeather = (error, response) =>{
	if (error) {
		console.log(error);
	} else {
		console.log(response.name);
	}
};

geocode('Los Angeles 123', (error, response) => {
	if (error) {
		console.log(error);
	} else {
		forecast(response, handleWeather);
	}
});






