//copy index.html file from module1 to new folder in side module 2 having name html.

let path=require('path');
let fs=require('fs');
// let srcPath=path.join(__dirname,"")

let destPath=path.join(__dirname,"..","..","index.html");//double dot de ek directory back jate hai jab module2 me pahuch jayege index.html add kar denge kyo ki destinationpath ese hi dikhega jab copy karenge
console.log("destination path : ",destPath);//ab source path bnao
let srcPath=path.join(__dirname,"..","..","..","module1","index.html");//jaha se file uthhayenge uska path ese dikhega
console.log("source path : ",srcPath);
//terminal me cd .. run karoge to ek directory back chle jaoge cd nameofDirectory/ se ek directory age jaoge terminal par

//ab copy karo
fs.copyFileSync(srcPath,destPath);
//dusra tareeka hai path copy karke karlo source and destination ka