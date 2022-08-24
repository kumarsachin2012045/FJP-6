//read content of unorganised folder and make an array which has extension n ame of each file
let fs=require("fs");
let path=require("path");

let folderKaPath=path.join(__dirname,"..","unorganise");
//console.log(folderKaPath);
let content=fs.readdirSync(folderKaPath);
console.log(content);

let extArr=[];
for(let i=0;i<content.length;i++){
let name=content[i];
let extName=path.extname(name);
extArr.push(extName);}
console.log(extArr);
//or
// for(let i=0;i<content.length;i++){
// let ex=path.extname(content[i]);
// console.log(ex);
// }