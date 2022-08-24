//read content of unorganised folder and make an array which has extension n ame of each file
let fs=require('fs');
let path=(require('path'));
let folderKaPath=path.join(__dirname,"..","unorganise");//double dot lgane se ek folder back aa jao dir unorganise ke pass chle jao
//console.log(folderKaPath);
let content=fs.readdirSync(folderKaPath);//array return karega read karke use content me store kar liya
console.log(content);

//ab extension chahiye

for(let i=0;i<content.length;i++)
{
    let extOfFile=path.extname(content[i]);
    console.log(extOfFile);
}

                 //or
// let extArr=[];//empty array bnaya
// for(let i=0;i<content.length;i++){
//     let extOfFile=path.extname(content[i]);
//          extArr.push(extOfFile);
// }
// console.log(extArr);
