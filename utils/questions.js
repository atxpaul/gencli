const ask=require('./ask');



module.exports=async()=>{
    const name= await ask({message:`CLI name`,hint:`kebab-case only`,initial:`test`});
    const command= await ask({message:`CLI command`,hint:`(optional: if different from CLI name)`,initial:`test`});
    const description= await ask({message:`CLI description`});
    const version= await ask({message:`CLI version`,initial:`0.0.1`});
    const license= await ask({message:`CLI license`,initial:`UNLICENSED`});
    const authorName= await ask({message:`CLI authorName`});
    const authorEmail= await ask({message:`CLI authorEmail`});
    const authorUrl= await ask({message:`CLI authorUrl`});
    
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
