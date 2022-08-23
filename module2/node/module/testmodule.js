let calc=require("./calculator.js");
console.log(calc);//object ko show kraya 
//agar koi key access karna hai to objectname.keyname agar function hai to call karna padega objectname.keyname()


console.log(calc.addition(4,6));//function hai isliye call karna padega
console.log(calc.subtraction(6,2));
console.log(calc.division(8,1));