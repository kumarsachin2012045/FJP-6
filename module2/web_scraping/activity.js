const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.log('error:', error); // Print the error if one occurred
    else{
        console.log(html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        // let temp= document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title");
        //let temp= document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
        let temp= document.querySelectorAll(".ds-text-tight-s.ds-font-bold.ds-uppercase");
           for(let i=0;i<temp.length;i++)
           console.log(temp[i].textContent);
        }
    }