//request lgane se htmpl page to gya ab isme koi bhi data nikalna hai to selector and ek tool ka help lenge 
//selector ham inspect me ja ke le ayenge jis page ka dta chahiye uska 
//tool ka name jsdom hai pahle ise install karenge  npm i jsdom terminal me likh ke
//iska kam hai data ko lana html page se jo selector diye ho ise 
//data lane ke liye pahle dom me gye iske andar ek key hai window name ki uske andar document hai 
//agar poora html page chahiye to document tak jana padega uske bad query sellector lgaya ye kya karta hai
//ye bolta hai mujhe ek selector do uska content html se lake de dega jaise line 13 me p tag diya hai
//agar apko poora element nhi chahiye to .textContent likh dena ye jo text likha hoga wo lake de dega


const jsdom = require("jsdom");//ye jo require kiya ye object hai isme different-2 key hongi
const { JSDOM } = jsdom;//ye dusra tareeka hai direct object se key nikalne ka
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);//isme html pass karte hai
console.log(dom.window.document.querySelector("p").textContent);//isme selector pass karte hai
//ab request and jsdom ko combine karke use karte hai activity.js me
