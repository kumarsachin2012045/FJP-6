//declare  a string
let str="I am a string";
console.log(str);
//length of string
let len=str.length;
console.log("length of string : "+len);
//sliced method //it give some part of string//include starting index but not include last index
let partofstring=str.slice(2,5);
console.log(partofstring);
//replaced method it return replaced string but orignal string not affected
let replstr=str.replace('am','was');
console.log(replstr);
console.log("orignal string not change "+str);
//upper case and lower case
let up=str.toUpperCase();
console.log(up);
let lw=str.toLowerCase();
console.log(lw);

//concatination
let firstName="Anju";
let lastName="preeti";
let fullNme=firstName.concat(lastName);
console.log(fullNme);
//other method
let fullName=firstName+lastName;
console.log(fullName);

//splitted method jo bhi doge uske basis par split kar dega
let spltd=str.split(" ");
console.log(spltd);
let spp=str.split(',');
console.log(spp);

