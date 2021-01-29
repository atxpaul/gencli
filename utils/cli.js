const meow = require('meow');
const meowHelp = require('cli-meow-help')
const {green, yellow, cyan, dim} = require('chalk');

const flags={
    clear:{
        type:'boolean',
        default: true,
        alias:'c',
        desc:`Clears the console`
    },
    debug: {
        type:'boolean',
        default: false,
        alias: 'd',
        desc:`Prints debug info`
    },
    version: {
        type:'boolean',
        default: false,
        alias: 'v',
        desc:`Prints the version`
    }};

const commands={
    help: {
        desc:`Print the help info`
    }
};

const helpText = meowHelp({
    name:`ncli`,
    flags,
    commands
})

const options = {
    inferType:true,
    description:false,
    hardRejection: false,
    flags
}

module.exports = meow(helpText, options);

