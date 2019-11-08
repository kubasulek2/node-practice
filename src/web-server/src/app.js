const express = require('express');
const path = require('path');

const app = express();

// Define paths for Express config.
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// set up handlebars templates - need npm i hbs first. If only this is present
// templates directory name must be "views" an be in the root dir!
app.set('view engine', 'hbs');

// to override this another set - this time views:
app.set('views', viewsPath);



// express.static is responsible for handling paths, so that paths in views/.hbs files stays the same as in public/.html files
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