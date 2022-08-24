//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type
//put in these folder in organise folder
let fs=require('fs');
let path=require('path');
let arr=['Audio','Video','Software','Document','Application','Other'];//ye sare folder
let nameArr=['abc','efd','xyz','def'];//4 filo ke name 
let extArr=['.mp3','.mp4','.exe','.pdf','.txt','.zip'];//har file extension

//pahle organise name ka folder bnate hai question folder me
let organisePath=path.join(__dirname,"organise");
if(!fs.existsSync(organisePath))
    fs.mkdirSync(organisePath);

for( let i=0;i<arr.length;i++){
    let folderKaPath=path.join(organisePath,arr[i]);
      if(!fs.existsSync(folderKaPath))
        fs.mkdirSync(folderKaPath);
    for(let j=0;j<nameArr.length;j++)
    {
      let fileName=nameArr[j]+extArr[i];
      let fileKaPath=path.join(folderKaPath,fileName);
      fs.writeFileSync(fileKaPath," ");
    }
}