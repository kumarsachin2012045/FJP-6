const fs=require('fs');
console.log("Before");
fs.readFile("file.txt",cb1);//Asynchronous function
fs.readFile("F2.txt",cb2);////Asynchronous function ye dono node api par jayege pahle aur dono  parallelly read honge
//jo kam pahle read ho jayega wo pahle jayega task queue me aur jo pahle jayega task queue me wo pahle jayega call stack me
//aur pahle execute ho jayega order alag -2 ho sakta hai depend karta hai kaun pahle read hoke task queue me ja raha hai
//baki note jo likhe ho waha sev dekh lena  ab chlo dekhte hai leaderbord kaha likhe ki sara record dikh jaye 
function cb1(error,data){
    if(error)
    console.log(error);
    else
    console.log("Data of file-1 : "+data);
}
function cb2(error,data){
    if(error)
    console.log(error);
    else
    console.log("Data of file-2 : "+data);
}
console.log("After");