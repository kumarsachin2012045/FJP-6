const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/the-hundred-women-s-competition-2022-1299144/trent-rockets-women-vs-welsh-fire-women-21st-match-1299165/live-cricket-score";

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.log('error:', error); // Print the error if one occurred
    else{
        console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let t= document.querySelectorAll(".ds-text-tight-xs.ds-truncate.ds-text-typo-title");
           console.log(t[0].textContent);
        }
    }
