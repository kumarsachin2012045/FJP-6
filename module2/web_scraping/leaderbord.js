const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link="https://www.espn.com/cricket/scores/series/8634/womens-t20-world-cup"//https://www.espn.com ye domain name hai href me add ho ke complete link banega new page ka
request(link,cb);
function cb(error,response,html){
    if(error)
     console.log(error);
    else{
        const dom= new JSDOM(html);
        const document=dom.window.document;
        let allscorecardTag=document.querySelectorAll('a[name="&lpos=cricket:scoreboard:scorecard"]');//jab do bar " " lgana pad jaye to differentiate karne ke liye ek singl ' ' me dusra " "double me rakhte hai selector nhi to error dega 
        //seletor bnate time dekhna attribute lene se kam ho raha h ya class 
        for(let i=0;i<allscorecardTag.length;i++){
        let link= allscorecardTag[i].href;
        let completeLink="https://www.espn.com"+link;
        console.log(completeLink);
        }
    }
}