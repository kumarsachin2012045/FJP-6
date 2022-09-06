const fs=require('fs');
console.log("Before reading the data");
let content =fs.readFileSync("file.txt");//ye Asynchronous function hai
console.log(content+"");
console.log("After reading the data");
// ye kam sychronously ho raha hai line by line
//ham chahte hai jab tak data read kare tab tak uske neeche ka code chal jaye ie asychronously ye ham karte hai callback function se 

console.log("*****************************************");
fs.readFile("file.txt",cb);//yaha cb name ka callback function use kiya
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


//Asynchronous function ye node api par chla jata hai jab tak call stack me jo hai wo run nhi hota
//teen container hote hai 1.call stack(jo main thread par par hota hai)2. task queue(calling function like cb) 3. Node API(ISME Asynchrous function rakhe jate hai) 
