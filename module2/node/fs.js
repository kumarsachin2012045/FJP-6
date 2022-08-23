const { Console } = require('console');
let fs=require('fs');
//console.log(fs);
let path=require('path');//yaha path ki need hai isliye require karna padega
//fs CRUD ka feature provide karta hai to ab ham file create karte hai uske pahle path bnate hai
let filePath=path.join(__dirname,"file.txt");//path ban gya
console.log(filePath);
//1 C-Create a file
//agr phle se file nhi to ban jayega agr  hai to jo kuch usme hoga us par overwrite ho jayega
fs.writeFileSync(filePath,'Hello i am text file');//isse file create hoga with given string

//2 R- Read  // ye do cheeje leta hai ek file ka name dusra encoding jis format me read karega
let content=fs.readFileSync(filePath,'UTF-8');//utf-8 isliye use kiya taki buffer me na aye output
console.log(content);
//dubara create kiya
fs.writeFileSync(filePath,'Again writing on existing file');

//2 R- Read  // ye do cheeje leta hai ek file ka name dusra encoding jis format me read karega
let content1=fs.readFileSync(filePath,'UTF-8');//utf-8 isliye use kiya taki buffer me na aye output
console.log(content1);
console.log("#########################################");
let content2=fs.readFileSync(filePath);//utf htaoge to ese console karte time (""+content2) likhna padega
console.log(""+content2);


console.log("CONTENT BEFORE UPDATE : ");

let c1=fs.readFileSync(filePath);
console.log(""+c1);

//U-update ye overwrite nhi karta uske age jake add kar deta hai
console.log("content after update : ");

fs.appendFileSync(filePath," Newly added content");
let content3=fs.readFileSync(filePath);
console.log(""+content3);





//D- delete//isme file ka path de do bas us file ko hta dega

//fs.unlinkSync(filePath);