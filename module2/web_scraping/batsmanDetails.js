const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);

function cb(error, response, html) {
    if(error)
        console.log('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let Btable=document.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table tbody tr td a");
        for(let i=0;i<Btable.length;i++){
            console.log(Btable[i].textContent);
            
           
        }
       }
}
