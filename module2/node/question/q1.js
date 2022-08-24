//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs=require('fs');
//fs.mkdirSync("Newfolder");
//3 and 4 line se folder ban gya same folder/directory me jisme ho
//agar dubara run karoge to error dega kyo ki run karne par line 4 dubara chal jayega kyo ki folder pahle se hai 
//isliye condition lgana padega
if(!fs.existsSync("Newfolder")){
    fs.mkdirSync("Newfolder");
}
//ab text file bnao with content new file has been made jo folder bnye ho usi me

let path=require('path');
let filePath=path.join(__dirname,"Newfolder","newfile.txt");//__dirname se question tak ka path mil jayega uske age add karna jaha pahuchna hai//reponsible for path
console.log("file ka path jaha pahuchna hai :",filePath);
fs.writeFileSync(filePath,"New file has been made");//responsible to create file with content
