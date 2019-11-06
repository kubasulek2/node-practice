const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes';

const addNote = (title, body) => {

	// Format title
	title = title.trim().replace(/ /g, '_');

	const notes = loadNotes();

	const duplicatedNote = notes.filter(note => note.title === title);
	if (!duplicatedNote.length) {
		notes.push({
			title: title,
			body: body
		});

		saveNotes(notes);
		console.log(chalk`
		 {blue.inverse Success:} note {green ${ title }} added.
		`);

	} else {
		console.log(`${ chalk.red('Error:') } note ${ title } exist.`);
	}
};

const removeNote = title => {

	title = title.trim().replace(/ /g, '_');
	const notes = loadNotes();
	const notesToKeep = notes.filter(note => note.title !== title);

	if (notes.length > notesToKeep.length) {
		saveNotes(notesToKeep);
		console.log(`${ chalk.green.inverse('Success:') } note ${ title } removed.`);

	} else {
		console.log(`${ chalk.red.inverse('Error:') } note ${ title } not found.`);
	}

};

const listNotes = () => {
	const notes = loadNotes();
	if(notes.length){
		console.log(chalk`{green.inverse Your notes:}`);
		notes.forEach(note => console.log(note.title));
	} else {
		console.log(chalk`{red.inverse No notes found.}`);
	}
}


/* Utility */

const saveNotes = notesArray => fs.writeFileSync(
	'./data/notes.json',
	JSON.stringify(notesArray, null, '\t')
);

const loadNotes = () => {
	try {
		return JSON.parse(fs.readFileSync('./data/notes.json', 'utf8'));
	} catch (_) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes
};
