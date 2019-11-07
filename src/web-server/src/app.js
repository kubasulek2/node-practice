const express = require('express');
const path = require('path');

const app = express();
//
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));


// handle get requests for base address



app.get('/weather', (req, res) => {
	res.send('here is the weather');
});


app.listen(3000, () => {
	console.log('Server is up on port 3000.');
});