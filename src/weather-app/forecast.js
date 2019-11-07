const request = require('request');

const forecast = (position, callback) => {
	const { lat, lon, name } = position;
	const weatherUrl = `https://api.darksky.net/forecast/${ process.env.DARK_SKY_KEY }/${ lat },${ lon }?units=si&exclude=minutely,hourly,alerts,flags`;

	request({ url: weatherUrl, json: true }, (error, response) => {
		const { 
			currently, 
			daily: { data: dailyData }, 
			error: respError, 
			code: errCode 
		} = response.body;
		if (error) {
			callback('Unable to connect to weather services .');
		} else if (respError) {
			callback(`Error ${ respError }: ${ errCode }`);
		} else {
			callback(null, {
				current: currently,
				summary: dailyData[ 0 ].summary,
				name: name
			});
		}
	});
};

module.exports = forecast;