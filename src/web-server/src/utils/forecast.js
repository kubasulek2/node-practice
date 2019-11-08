const request = require('request');

const forecast = (lat, lon, callback) => {
	const url = `https://api.darksky.net/forecast/92fc1c30eeeaeff7a1cc5533a13d8f95/${ lat },${ lon }?units=si&exclude=minutely,hourly,alerts,flags`;

	request({ url, json: true }, (error, response) => {
		const { 
			currently: { temperature: temp, precipProbability: rain}, 
			daily, 
			error: respError, 
			code: errCode 
		} = response.body;

		if (error) {
			callback('Unable to connect to weather services .');
		} else if (respError) {
			callback(`Error ${ errCode }: ${ respError }`);
		} else {
			callback(null, {
				temp,
				rain,
				summary: daily.data[ 0 ].summary,
			});
		}
	});
};

module.exports = forecast;