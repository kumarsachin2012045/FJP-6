const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const link = "https://www.espn.com/cricket/scores/series/8634/womens-t20-world-cup"//https://www.espn.com ye domain name hai href me add ho ke complete link banega new page ka
let leaderbord = [];
let counter = 0;
request(link, cb);//ye Asynchronous function hai
function cb(error, response, html) {
    if (error)
        console.log(error);
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allscorecardTag = document.querySelectorAll('a[name="&lpos=cricket:scoreboard:scorecard"]');//jab do bar " " lgana pad jaye to differentiate karne ke liye ek singl ' ' me dusra " "double me rakhte hai selector nhi to error dega 
        //seletor bnate time dekhna attribute lene se kam ho raha h ya class 
        for (let i = 0; i < allscorecardTag.length; i++) {
            let link = allscorecardTag[i].href;
            let completeLink = "https://www.espn.com" + link;
            //console.log(completeLink); ab iss link par request lgate hai iss link par  htnl page lane ke liye
            request(completeLink, cb2);
            counter++;
        }
        //console.log(leaderbord);//output empty
    }
}
function cb2(error, response, html) {
    if (error)
        console.log(error);
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmanRow = document.querySelectorAll(".scorecard-section.batsmen .flex-row .wrap.batsmen");
        for (let j = 0; j < batsmanRow.length; j++) {
            let cell = batsmanRow[j].querySelectorAll(".cell");
            if (cell.length == 8) {//jo kam ki td usme 8 cell/td hai har row me 
                let name = cell[0].textContent;
                let runs = cell[2].textContent;
                let balls = cell[3].textContent;
                let fours = cell[4].textContent;
                let sixes = cell[5].textContent;
                //console.log("Nmae : ",name," Runs : ",runs," Balls : ",balls," Four : ",fours," Sixes : ",sixes);
                processPlayer(name, runs, balls, fours, sixes)
            }
        }
        //console.log(leaderbord);//jitna bar cb2 chla utna bar leaderbord/array print hoga ye shi jagah nhi h

        counter--;
        if (counter == 0) {
            console.log(leaderbord);//yaha par hamara leaderbord poora taiyar hai jsn file ke liye code yhi likhenge
            //fs.writeFileSync('BatsmanStats.json',leaderbord)//ise do parameter chahiye 1. path(kaha lihna chahte ho) 2.uske andar kya likhna chahte ho wo string me dena   
            //ye error dega kyo ki leader bord ek array hai string nhi hai 
            //isproblem ko solve karne ke liye JSON.stringify() hai
            let data = JSON.stringify(leaderbord)//leaderbord ko string me convert kar diya aur ese karti h ki bad me app wapas se json me covert kar lo parse lga ke
            fs.writeFileSync('BatsmanStats.json', data);//jab iss file par jaoge to sahi format me na dikhe to right click karke format par click kar dena 
           
           //Excel sheet coversion process
            let xlsx = require("json-as-xlsx")//yha iska module require kiya jaise pahle karte the that means iss module ko use karenge

            let dataExcel = [//jaise json array of object hai oaise data bhi array of object hai isme 2 object hai to 2 sheet bnegi
                {
                    sheet: "IPL player Details",
                    columns: [//value me btayenge ki kis key correspond value uthhani h
                        { label: "Name", value:"Name" },
                        { label: "Innings", value:"Innings" },
                        { label: "Runs", value:"Runs" },
                        { label: "Balls", value:"Balls" },
                        { label: "Fours", value:"Fours" }, 
                        { label: "Sixes", value:"Sixes" }, 
                             
                    ],
                    content: leaderbord 
                    //[{Name:"Name"}
                },

            ]

            let settings = {//setting object me file ka nam hai aur kitne column ki length rakhni wo hh 
                fileName: "BatsmanDetails", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
            }

            xlsx(dataExcel, settings) // Will download the excel file
            //run karne par ek excel sheet bnegi jo file name diye ho
            //explanation json_as_xlsx me hai read kar lo
        }
    }
}
// processPlayer('Muneeba Ali','10','13','2','0')//string kyo pass kiya .textContent likhte hai to string milta hai isse add karne par concatenate ho jata hai
// processPlayer('Muneeba Ali','25','26','3','0')//Number ki helps sabko integer me change kar diya
// console.log(leaderbord);
function processPlayer(name, runs, balls, fours, sixes) {
    runs = Number(runs);
    balls = Number(balls);//conversion from string to integer
    fours = Number(fours);
    sixes = Number(sixes);
    for (let i = 0; i < leaderbord.length; i++) {
        let playerObj = leaderbord[i];
        if (playerObj.Name == name) {
            //do some work
            playerObj.Runs += runs,
                playerObj.Innings += 1,
                playerObj.Balls += balls,
                playerObj.Fours += fours,
                playerObj.Sixes += sixes
            return;
        }
    }
    //code comming here if not find player in leaderbord
    let obj = {
        Name: name,
        Innings: 1,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes
    };
    leaderbord.push(obj);
}//leaderbord to ban gya hai
//console.log(leaderbord);//iska output empty[] kyo ki callback(cb)abhi chla hi nhi ye abhi node API par rkha hai
//jab Asynchronous function apna kam kar lega tab callback function ko waiting/task queue me bhejega ye tab tak waiting karega jab tak callstack empty nhi hoga
//aur tab ye call stack me jake execute hoga iska matlab leaderbord ko yaha nhi print kra sakte;
//leaderbord ko cb ke andar likha tab kya print hoga output empty[] kyoki cb execute hote time ye cb2 par request kar dega jis se ye jitna team hoga sare request ye asynchronous hai isliye sare node API par chale jayenge aur sare function waiting me wait karenge call stack empty hone ka
//aur neeche console karne ke liye kuchh hai nahi to console nhi karega kuchh bhi
//ab cb2 ke neeche likh ke dekhte hai
//q1 kya leaderbord empty print hoga ?----no
//q2 leadrbord kitni bar print hoga ?-----iske liye counter lga dekh lo aur ek se jyada bar array of object print hoga aur har array me jitni bar cb2 call hua hoga utni bar object print hua hoga
//kya update hoke har bar print hoga ya same hoga  ---update aur ek bar esa zaroor hoga jab jab final leaderbord print hua hoga
//ek se jyada lederbord ya Array print hoga but hme to ek leaderbord/array print karna tha
//Array hamari object ki bni hai har array me ek se jayada object honge

//ye pta karne ke liye ki final leaderbord kab print hoga iske liye pahle counter lgaya aur request ko count kiya jo node API par h
//uske bad jo count mila jaise -2 request compplete ho rhi hai count ko decrease kar rahe hai tab tak jab tk sare request apna kam nhi kar lete hai (that means sare function one by one waiting queue se call stack me jake execute nhi hote tab tak count decrease karenge) and count 0 hote hi sare request complete ho jayenge
// aur final leadrbord mil jayega aur ye ek hi arry me hoga sara object honge
//hamre pass sare object aa gye but dikha nhi raha hai ...18 more items karke chhode de raha hai sabhi player object nhi dikha raha
//hme agar dekhna hai na to ham ek jsn file bnate hai aur usme sare data/items/object ko dekh askte hai
//iske liye fs require karna padega fs fir fs.writeFileSync('path',string)ki helps content ko path par jake file bna ke content likh dega
//aur sara data dikhega jab us path par jaoge agar format shi na ho to right click kare format document par click kar dena dikh jayega

//JSON KE BARE ME(json format devloper ko pta hota hai normal log pdf format  jante hai)
//json means java script object notaion ye data response bhejne me kam ati hai aur data ko manuclutaion karne ke kam ati hai
// jaise API likhte hai bacakent pe to wha se data pass karna hota to json form me karte h
//ye tha node API ka concept
//ab ek kam aur h ise xLsx me covert karna hai aap google out kar sakte ho ki json string ko kaise xLsx kaise bnate hai ya array of object ko kaise xLsx me kaise bnate hai
//jo data aya hai pahle use print karaya to pura nhi dikha to json file bna li(isme dikhi) ab ise xLsx bnana hai
//xLsx format sabse jayda readable hai
//xlsx me convert karne ke liye ek tool hai json-as-xlsx agr ye tool use karna hai to npn i json-as-xlsx ese likh ke terminal me install karna padega aur ise kaise use karna hai iske page par likha hoga uses me ye ham same kar rahe hai jaise jsdom,request bahar se use kiya tha aur dekhe the kaise use karna hai uske page par jakar(that means iska syntax)
//iske syntax (uses me) me jo tha use json_as_xlsx(iss file ko bnaya hai) ke file me paste kiya aur usko obseve kiya
//baki cheeje json_as_xlsx me explain kiya hai
//ab ham kisi bhi saide ka data nikal sakte ho
//HW github scraper