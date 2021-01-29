const path=require('path');
const copy=require('copy-template-dir');
const {green: g, dim:d, yellow:y} = require('chalk');
const alert=require('atx-alerts');
const execa=require('execa');
const ora=require('ora');

const questions=require('./questions');
const {packages}=require('./packages');
const spinner=ora({text:''})


module.exports=async()=>{
    const vars=await questions();
    const outDir = vars.name;
    const inDirPath=path.join(__dirname,`../template`);
    const outDirPath=path.join(process.cwd(),outDir);
    
    
    copy(inDirPath, outDirPath, vars, async(err, createdFiles) => {
        if (err) throw err

        console.log(d(`\nCreating files in ${g(`./${outDir}`)} directory:\n`))

        createdFiles.forEach(filePath => {
            const fileName=path.basename(filePath);
            console.log(`${g(`CREATED`)} ${fileName}`)
        })

        console.log();
        spinner.start(`${y(`Generating...`)}`)
        process.chdir(outDirPath)
        await execa(`npm`, [`dedupe`])
        await execa(`npm`,[`install`,...packages])
        spinner.succeed(`${g(`CLI Generated`)}`)

        alert({
            type:`success`,
            name:`ALL DONE`,
            msg:`\n\n${createdFiles.length} files created in ${d(`./${outDir}`)} directory`
        })

      })
}