const forecast = (position, callback) => {
	const { lat, lon, name } = position;
	const weatherUrl = `https://api.darksky.net/forecast/${ process.env.DARK_SKY_KEY }/${ lat },${ lon }?units=si&exclude=minutely,hourly,alerts,flags`;

	request({ url: weatherUrl, json: true }, (error, response) => {
		if (error) {
			callback('Network Error.');
		} else {
			callback(null, {
				current: response.body.currently,
				today: response.body.daily[ 0 ],
				name: name
			});
		}
	});
};

module.exports = forecast;