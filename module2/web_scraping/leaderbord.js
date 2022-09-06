const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link="https://www.espn.com/cricket/scores/series/8634/womens-t20-world-cup"//https://www.espn.com ye domain name hai href me add ho ke complete link banega new page ka
let leaderbord=[];
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
        //console.log(completeLink); ab iss link par request lgate hai iss link par  htnl page lane ke liye
        request(completeLink,cb2);
        }
    }
}
function cb2(error,response,html){
    if(error)
    console.log(error);
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let batsmanRow=document.querySelectorAll(".scorecard-section.batsmen .flex-row .wrap.batsmen");
        for(let j=0;j<batsmanRow.length;j++){
            let cell=batsmanRow[j].querySelectorAll(".cell");
            if(cell.length==8){//jo kam ki td usme 8 cell/td hai har row me 
                let name=cell[0].textContent;
                let runs=cell[2].textContent;
                let balls=cell[3].textContent;
                let fours=cell[4].textContent;
                let sixs=cell[5].textContent;
                //console.log("Nmae : ",name," Runs : ",runs," Balls : ",balls," Four : ",fours," Sixes : ",sixs);
            }
        }
    }
}
processPlayer('Muneeba Ali','10','13','2','0')//string kyo pass kiya .textContent likhte hai to string milta hai isse add karne par concatenate ho jata hai
processPlayer('Muneeba Ali','25','26','3','0')//Number ki helps sabko integer me change kar diya
console.log(leaderbord);
function processPlayer(name,runs,balls,fours,sixes){
    runs=Number(runs);
    balls=Number(balls);//conversion from string to integer
    fours=Number(fours);
    sixes=Number(sixes);
    for(let i=0;i<leaderbord.length;i++){
           let playerObj=leaderbord[i];
           if(playerObj.Name==name){
            //do some work
            playerObj.Runs+=runs,
            playerObj.Innings+=1,
            playerObj.Balls+=balls,
            playerObj.Fours+=fours,
            playerObj.Sixes+=sixes
            return;
           }
     }
     //code comming here if not find player in leaderbord
     let obj={
        Name:name,
        Innings:1,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
     };
     leaderbord.push(obj);
 }
