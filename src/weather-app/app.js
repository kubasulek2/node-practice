const geocode = require('./geocode');
const forecast = require('./forecast');

require('dotenv').config();

const printWeatherData = ({ name, current: { temperature, precipProbability}, summary}) => {
	console.log(name);
	console.log(`${summary} Current temperature is ${temperature} celsius. There is ${precipProbability}% of rain.`);
};
	
const address = process.argv[2];

if(!address){
	console.log('Please provide location/address as an argument');
} else if (process.argv.length > 3){
	console.log('Please put quotes around location/address');

} else {
	geocode(address, (error, response) => {
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
}







