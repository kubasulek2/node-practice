const fs = require('fs');

const getNotes = () => 'Your notes';

const addNote = (title, body) => {

	// Create notes.json if not exists. place some dummy data for JSON.parse not to fail
	if (!fs.existsSync()) {
		fs.writeFileSync(
			'./data/notes.json',
			JSON.stringify({ notes: null }, null, '\t')
		);
	}

	// Format title
	title = title.trim().replace(/ /g, '_');

	const notesObject = loadNotes();
	console.log(notesObject);

};

const loadNotes = JSON.parse(fs.readFileSync('./data/notes.json', 'utf8'));

module.exports = {
	getNotes: getNotes,
	addNote: addNote
};
