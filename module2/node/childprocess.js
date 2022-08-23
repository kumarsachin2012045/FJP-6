let cp=require('child_process');//it is a object//iski help se dusri file ko run kar sakte hai  
//console.log(cp);
//open vs code with child process
//cp.execSync("code");
let content=cp.execSync('node test.js');
console.log(content);
console.log("Output of test.js is ",content);//esa likhne se  binary buffer form me output ayega
//ise string me convert karne ke liye ese likhenge kyo ki jo by default ata hai wo  string me nhi hota
console.log("Output of test.js is "+content);//esa likhne se  actual output ayega
console.log(""+content);
