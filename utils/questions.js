const ask=require('./ask');



module.exports=async()=>{
    const name= await ask({name:`name`,message:`CLI name`,hint:`kebab-case only`,initial:`test`});
    const command= await ask({name:`command`,message:`CLI command`,hint:`(optional: if different from CLI name)`});
    const description= await ask({name:`description`,message:`CLI description`});
    const version= await ask({name:`version`,message:`CLI version`,initial:`0.0.1`});
    const license= await ask({name:`license`,message:`CLI license`,initial:`UNLICENSED`});
    const authorName= await ask({name:`authorName`,message:`CLI authorName`});
    const authorEmail= await ask({name:`authorEmail`,message:`CLI authorEmail`});
    const authorUrl= await ask({name:`authorUrl`,message:`CLI authorUrl`});
    
    const vars={
        name,
        command:command?command:name,
        description,
        version,
        license,
        authorName,
        authorEmail,
        authorUrl
    }

    return vars;
}
