/* Npm packages */
//const validator = require('validator');
const chalk = require('chalk');
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
	handler: function () {
		console.log(chalk.red('Removed!'));
	}
});

yargs.command({
	command: 'list',
	describe: 'Display a list of all notes',
	handler: function () {
		console.log(chalk.green('List!'));
	}
});

yargs.command({
	command: 'read',
	describe: 'Read a note: read fileName',
	handler: function () {
		console.log(('File Content!'));
	}
});

yargs.parse();