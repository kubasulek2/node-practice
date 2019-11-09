window.addEventListener('DOMContentLoaded', (_) => {
	const weatherForm = document.querySelector('form');
	const search = document.querySelector('input');
	const messageOne = document.querySelector('#message-1');
	const messageTwo = document.querySelector('#message-2');


	weatherForm.addEventListener('submit', function (event) {
		event.preventDefault();
		const query = search.value;
		const url = `/weather?address=${ encodeURIComponent(query) }`;

		fetch(url)
			.then(resp => resp.json())
			.then(({ error, location, forecast }) => {
				if (error) { messageOne.textContent = error; }
				else {
					messageOne.textContent = location;
					messageTwo.textContent = `${ forecast.summary } It's currently ${ forecast.temp.toFixed()}&deg;C. There is a ${forecast.rain}% chance of rain`;
				}
			})
			.catch(({ message }) => messageOne.textContent = message);
	});
});
