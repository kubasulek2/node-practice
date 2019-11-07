const geocode = (address, callback) => {
	const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=${ process.env.MAP_BOX_KEY }&limit=1&language=en`;

	request({ url: geocodingUrl, json: true }, (error, response) => {
		if (error) {
			callback('Unable to connect to service.');
		} else if (response.body.features.length === 0) {
			callback('Wrong query parameters.');
		} else {
			try {
				const { place_name: name, center: [ latitude, longitude ] } = response.body.features[ 0 ];
				callback(null, {
					lat: latitude,
					lon: longitude,
					name: name
				});
			} catch (_) {
				callback(`Error ${ response.body.code }: ${ response.body.error }`);
			}
		}
	});
};

module.exports = geocode;


