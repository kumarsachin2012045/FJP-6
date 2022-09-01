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
        let Batsman=document.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table tbody tr td a");
        for(let i=0;i<Batsman.length;i++){//link find karne ke liye .href karna h
            //console.log(Batsman[i].textContent);
            let batmanLink=Batsman[i].href;
            //console.log(batmanLink);//yaha se half link milega jo href me hai baki half link next page ke url me hai use add kardo to next page ki complete link milega 
           let comleteBatsmanLink="https://www.espncricinfo.com"+batmanLink;
           console.log(comleteBatsmanLink);
        }
       }
}
