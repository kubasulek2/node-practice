/* Npm packages */
//const validator = require('validator');
const yargs = require('yargs');
const fs = require('fs');

const notes = require('./notes');


/* Create notes directory if not exists*/
const dir = './data';
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}


/* Specify command line commands */
yargs.command({
	command: 'add',
	describe: 'Add a new note.',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'

		},
		body: {
			describe: 'Note Content',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		notes.addNote(argv.title, argv.body);
	}
});

yargs.command({
	command: 'remove',
	describe: 'Remove a note: remove fileName',
	builder: {
		title: {
			describe: 'Note To Remove',
			demandOption: true,
			type: 'string'

		}
	},
	handler: argv => notes.removeNote(argv.title)
});

yargs.command({
	command: 'list',
	describe: 'Display a list of all notes',
	handler() {
		notes.listNotes();
	}
});

yargs.command({
	command: 'read',
	describe: 'Read a note: read fileName',
	builder: {
		title: {
			describe: 'Note To Read',
			demandOption: true,
			type: 'string'

		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
});

yargs.parse();