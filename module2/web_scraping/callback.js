const fs=require('fs');
console.log("Before reading the data");
let content =fs.readFileSync("file.txt");
console.log(content+"");
console.log("After reading the data");
// ye kam sychronously ho raha hai line by line
//ham chahte hai jab tak data read kare tab tak uske neeche ka code chal jaye ie asychronously ye ham karte hai callback function se 
fs.readFile("file.txt",cb);//yaha cb name ka callback function use kiya
console.log("*****************************************");
console.log("Before reading the data");
function cb(error,data){
    console.log(data+"");
}
console.log("After reading the data");
//ye tha calll back function tha
//agar file ka name galat kar diya to error dena chahiye to ese bna do structure
// console.log("*****************************************");
// fs.readFileSync("fillllllle.txt");//file ka name galat diya
// console.log("Before reading the data");
// function cb(error,data){
//     if(error)
//     console.log(error);
//     else
//     console.log(data+"");
// }
// console.log("After reading the data");

