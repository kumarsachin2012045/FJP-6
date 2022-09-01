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
        let bolwerTable= document.querySelectorAll(".ci-scorecard-table+.ds-w-full.ds-table.ds-table-md.ds-table-auto");
        //console.log(bolwerTable.length);
        let Hwckt=0;
        let HwcktTaker=" ";
        for(let i=0;i<bolwerTable.length;i++)
        {
            let rows=bolwerTable[i].querySelectorAll("tbody tr");
            //console.log(rows.length);//ye number of rows bta raha dono table me
           
            for(let j=0;j<rows.length;j++)//loop lgaya td par har row ek se jyada td hai
            {
             let tds=rows[j].querySelectorAll("td");
             if(tds.length>1)
             {
                let name=tds[0].textContent;
                let wickets=tds[4].textContent;
                //console.log("Name of Bolwer -----> "+name+" Wicket ---->",wickets);
                if( Hwckt<wickets){
                    Hwckt=wickets;
                    HwcktTaker=name;
                }
             }

            } 
            
        }   
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            console.log("Higest wicket taken by "+HwcktTaker+" wicket "+Hwckt);     
    }
}
