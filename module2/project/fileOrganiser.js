

//task 1 take input and assumption koi folder nhi hona chahiye folder ke andar
let folderPath=process.argv[2];//input liya path input terminal me lena hai string k andar rakhna h
//agar error ayega to single \ slace ko double slace \\ se replace kar dena double 

//task 2 read the folder//first check folder exists or not
let path=require('path');
let fs=require('fs');
let folderExists=fs.existsSync(folderPath);

let extensions={
    Audio:['.mp3'],
    Video:['.mp4','.mkv'],
    Document:['.doc','.xlsx','.pdf','.txt'],
    Image:['.jpeg','.jpg','.png','.gif'],
    Software:['.exe']
};

if(folderExists){
    //we will code
    //console.log("Path is valid!!!!!!!!!!!!!!!!!!!!!!");
    let files = fs.readdirSync(folderPath);
    //console.log(files);//ye array milega
    for(let i=0;i<files.length;i++){
    let ext=path.extname(files[i]);
    //console.log(ext);
    let nameOffolder=giveFoldername(ext);
    //console.log("Ext is ",ext,'folder',nameOffolder);
    //task 4 name of folder milgya ab move kar do (that means organise kar do file ko folder me)

    }
}
else
    console.log("Please enter valid path!!!!!!!!!!!!");
//task 3 ab mujhe files ko diffrentiate karna ho to ki jpg hai ya mp3 ya aur kuchh hai on the basis of extension

function giveFoldername(ext){
    for(let key in extensions){
        let extArr=extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i]==ext){
                return key;
            }
        }

    }    
    return 'others';       
}
