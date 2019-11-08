const express = require('express');
const path = require('path');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');


// set up handlebars templates - need npm i hbs first.
app.set('view engine', 'hbs');
// express.static is responsible for handling paths, so that paths in views/.hbs files stays the same as in public/.html files
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
	res.render('index');
})
app.get('/weather', (req, res) => {
	res.send('here is the weather');
});


app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});