const geocode = require('./geocode');
const forecast = require('./forecast');

require('dotenv').config();

const printWeatherData = ({ name, current: { temperature, precipProbability}, summary}) => {
	console.log(name);
	console.log(`${summary} Current temperature is ${temperature} celsius. There is ${precipProbability}% of rain.`);
};
	

geocode('Los Angeles 123', (error, response) => {
	if (error) {
		return console.log(error);
	} 
	forecast(response, (error, forecastData) => {
		if (error) {
			return console.log(error);
		}
		printWeatherData(forecastData);
	});
});






