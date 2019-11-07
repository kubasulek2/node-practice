const request = require('request');

require('dotenv').config();

const url = `https://api.darksky.net/forecast/${ process.env.DARK_SKY_KEY}/37.8267,-122.4233?units=si&exclude=minutely,hourly,alerts,flags`;


request({ url: url, json: true }, (error, response) => {
	const current = response.body.currently; 
	const today = response.body.daily[0];
});