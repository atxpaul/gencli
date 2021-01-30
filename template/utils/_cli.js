const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    clear:{
        type:`boolean`,
        default:true,
        alias:`c`,
        desc: `Clear the console`,
    },
    debug:{
        type:`boolean`,
        default:true,
        alias:`d`,
        desc:`Print debug info`
    },
    version:{
        type:`boolean`,
        default:false,
        alias:`v`,
        desc: `Print CLI info`
    }
}

const commands = {
    help:{
        desc: `Print help info`
    }
}

const helpText = meowHelp({
    name:`{{command}}`,
    flags,
    commands,
})

const options = {
    inferType:true,
    description:false,
    hardRejection:false,
    flags
}

module.exports = meow(helpText,options)
