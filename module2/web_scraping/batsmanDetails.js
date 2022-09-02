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
           let comleteBatsmanLink="https://www.espncricinfo.com"+batmanLink;//link ek bar url se match kar lena jo extra ho use hta dena
           //console.log(comleteBatsmanLink);//hme phir se naye page ki link mili ab phir se request karni padegi
           request(comleteBatsmanLink,cb2)
        }
       }
}
function cb2(error,response,html){
    if(error)
    console.log(error);
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;//hm next page par hai
        let playerDetails=document.querySelectorAll(".ds-text-title-s.ds-font-bold.ds-text-ui-typo");
        let player=document.querySelectorAll("h5");
        
            let Name=player[0].textContent;
            let DOB=player[1].textContent;
            console.log("Name of plyer "+Name+"Date of birth "+DOB);
            
    }
}
