const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Define paths for Express config.
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up handlebars engine;
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// Set up static directory to serve. 123
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Kuba'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		help: 'helpful text'
	});
});



app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});