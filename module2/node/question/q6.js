//read content of unorganise folder and print each file type
//for example  abc.mp3 --> print Audio file
//             xyz.mp4 --> print Video file
//             fsd.jpg --> print Image file

let fs=require("fs");
let path=require("path");

let folderPath=path.join(__dirname,"..","unorganise");
console.log(folderPath);

let content=fs.readdirSync(folderPath);
console.log(content);
for(let i=0;i<content.length;i++){
let extName=path.extname(content[i]);
console.log(extName);
if( )
}