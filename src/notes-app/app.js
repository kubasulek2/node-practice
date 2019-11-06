/* Npm packages */
const fs = require('fs');
//const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

/* Customize version */
yargs.version('1.1.0');

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