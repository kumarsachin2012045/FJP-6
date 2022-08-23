// ye copy path krne par pta chla "C:\Users\kumar\OneDrive\Desktop\FJP-6\module2\node\path.js"
let path=require('path');
console.log(path);
let extensionName=path.extname("C:\Users\kumar\OneDrive\Desktop\FJP-6\module2\node\path.js");
console.log(extensionName);//it gives extension only jo bhi path doge sabka
console.log(__dirname);//folder tak ka path dega
console.log(__filename);//file tak ka path dega with name
let baseNmae=path.basename(__filename);
console.log(baseNmae);

//let se tumhe do path ko join karna ho to
 let dirPath=__dirname;//ye jis file me ho uska path dega
 console.log(dirPath);
 console.log("***************************************************");
 let newFilePath=path.join(dirPath,"test.js");
 console.log(newFilePath);
