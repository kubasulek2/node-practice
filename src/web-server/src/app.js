const express = require('express');

const app = express();

// handle get requests for base address
app.get('', (req, res) => {
	res.send('<h1>Hello<h1>');
});
app.get('/help', (req, res) => {
	res.send([1,2]);
});

app.get('/about', (req, res) => {
	res.send('About me');
});

app.get('/weather', (req, res) => {
	res.send('here is the weather');
});


app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});