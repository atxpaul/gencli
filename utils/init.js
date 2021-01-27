const welcome = require('cli-welcome')
const pkg=require('./../package.json')
const unhandled=require('cli-handle-unhandled')

module.exports=()=>{
    unhandled();
    welcome({
        title:'gencli for generating node CLI',
        tagLine:'by AtxPaul',
        description: pkg.description,
        version:pkg.version,
        bgColor:'#6cc24a',
        color:'#000000',
        bold:true,
        clear:true,
    })
}