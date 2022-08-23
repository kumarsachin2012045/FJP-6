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

fs.unlinkSync(filePath);
//delete wale ko comment karke dekho ge to file dikh jayega jo create hua tha



//task hai how to create directory google se puch lo 
//aur ye bhi puchh lo folder pahle se exist kar rahi ya nhi kaise check kare

//C-Create a directory //agr phle se hoga directory to error dega nhi hoga to bna dega
//fs.mkdirSync("Hamaridirectory");//jab file bnaye the to path diya tha yha kyo nhi diya kyoki 
//mkdirSync use karne par ye same folder/directory me folder/directory bna dega 
//agar path doge to us path par jakar bna dega directory path nhi doge to kewal name doge to usi folder me bna dega
//how to check already directory exist or not condition lga do taki error na aye search kar lo google se
//sab tareeka google se search kar ke nikal lo yad nhi karna hai chahe syntax ho ya jo kuch bhi ho
if(!fs.existsSync("Hamaridirectory"))
   fs.mkdirSync("Hamaridirectory");

   //R-read a directory
let folderPath="C:\\Users\\kumar\\OneDrive\\Desktop\\FJP-6\\module1";
//module1 ka path diya
let contentOfFolder=fs.readdirSync(folderPath);
console.log(contentOfFolder);//read karke array me dega sare file ka

//JAB COPY PATH KARKE folderPath ME Rakhoge single slace se seprated hoga  to run karoge to error dega
//error na aye isliye double slace (\\) se replace kar dena

