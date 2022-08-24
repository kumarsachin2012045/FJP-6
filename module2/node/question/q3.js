//copy index.html file from module1 to new folder in side module 2 having name html.
let fs=require("fs");
let path=require("path");

let srcPath=path.join(__dirname,"..","..","..","module1","index.html");
console.log(srcPath);
let destPath=path.join(__dirname,"..","..","index.html");
console.log(destPath);
fs.copyFileSync(srcPath,destPath);