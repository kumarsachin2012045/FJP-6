function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
//fs os path childprocess ki code kisi ne kahi likha hoga ose hi hamne bnaya
//ye hame object bnaya aur fs,os,path ki tarah use karne ke liye module.exports karna padega
//ab ham ise object ki tarah use kar sakte hai ye object hamne bna diya h
module.exports={
  addition:add,
  subtraction:sub,
  multiplication:mul,
  division:div
}