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
		name: 'KubaSulek'
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About',
		name: 'KubaSulek'
	});
});

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help',
		help: 'helpful text',
		name: 'KubaSulek'
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMsg: 'Help Article not Found',
		name: 'KubaSulek',
	});
});

// match anything hasn't been matched before
app.get('*', (req, res) => {
	res.render('404', {
		title: '404',
		errorMsg: 'Page not found',
		name: 'KubaSulek'
	});
});



app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});