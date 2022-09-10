const fs=require('fs');
console.log("Before");
let f1kapromise=fs.promises.readFile("f1.txt");
//console.log(f1kapromise);//output  pending state h
f1kapromise.then(function(data){
    console.log(data+"");
})
f1kapromise.catch(function(error){
    console.log(error);
})
console.log("After");