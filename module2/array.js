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
console.log("Array before push :"+earr);
earr.push("new item");
console.log("Array after push : "+earr);