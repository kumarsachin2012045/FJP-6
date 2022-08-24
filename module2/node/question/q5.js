//move a file
let path=require('path');
let fs=require('fs');
let srcpath=path.join(__dirname,"File.txt");
console.log(srcpath);
let destpath=path.join(__dirname,"Newfolder","File.txt");

fs.copyFileSync(srcpath,destpath);

//hame move karna tha isliye jo source the use unlink kar dete hai jisse o hat jayega jaha tha wha se
fs.unlinkSync(srcpath);
