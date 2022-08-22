//empty array 
let arr=[];
console.log(arr);

//array with element
let earr=[1,2,3,4,5,"Hello i am string ",false,'c',4.5];
console.log(earr);

//accessing array element
console.log(earr[5]);
console.log(earr[6]);
//you can replace the element
earr[4]='nothing';
earr[6]='wrong';
console.log(earr);

//array method 
console.log("Array method :::::::::::::::::::::::::::::::")
//1.push//add in last
console.log("Array before push :"+earr);
earr.push("new item");
console.log("Array after push : "+earr);
//2.pop//remove form last
console.log("Array before pop :"+earr);
earr.pop();
console.log("Array after pop : "+earr);
//4.unshift//it add in staring and it take parameter
console.log("Array before unshift :"+earr);
earr.unshift("add in starting");
console.log("Array after unshift : "+earr);
//3.shift //it remove from strting
console.log("Array before shift :"+earr);
earr.shift();
console.log("Array after shift : "+earr);
//length of array
let len=earr.length;
console.log("length of array : "+len);