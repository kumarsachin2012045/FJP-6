//function without parameter
function sayhello(){
    console.log("ye hai function");
}
sayhello();//function call

//function with parameter
function add(n1,n2){
    let a=n1+n2;
    console.log("addition is :"+a );
}
add(2,4);
//function with return type
function mul(n1,n2){
    return n1*n2;
}
let v=mul(2,4);
console.log("multification is "+v);
//storing a function in variable is called first class citizen
let val=function sub(n1,n2){
    return n1-n2;
}
console.log("subtraction is "+val(11,2));

//IIFE immediatly invoked expression
//IIFE without parameter
(function(){
    console.log("hello from IIFE");
})();
//IIFE with parameter
(function(n1,n2){
    console.log(n1/n2);
})(4,2);