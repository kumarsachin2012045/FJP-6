const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.google.com/";

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.log('error:', error); // Print the error if one occurred
    else{
        console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let temp= document.querySelectorAll("#SIvCob");
        
           console.log(temp[0].textContent);
        }
    }