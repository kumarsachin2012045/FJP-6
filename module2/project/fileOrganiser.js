//task 1 take input and assumption koi folder nhi hona chahiye folder ke andar
let folderPath=process.argv[2];
//console.log(folderPath);
//task 2 read the folder//first check folder exists or not
let fs=require('fs');
let folderExists=fs.existsSync(folderPath);

if(folderExists){
    //we will code
    //console.log("Path is valid!!!!!!!!!!!!!!!!!!!!!!");
    let files = fs.readdirSync(folderPath);
    console.log(files);
}
else
    console.log("Please enter valid path!!!!!!!!!!!!");