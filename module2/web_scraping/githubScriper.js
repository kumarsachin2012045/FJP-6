const request=require('request');
 const link="https://github.com/topics";
 const jsdom=require("jsdom");
 const {JSDOM}=jsdom;

request(link,cb);
function cb(error,response,html){
    if(error)
    console.log(error);
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;//https://github.com/topics iske page par phuch gye ab jo chhahiye uske selector lao aur query me pass kardo
        let allAnchorTags=document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");//jo tag hai inke pass link hoga use select karte hai aur complete link bnate hai dusre page ke liye kyo ki hame dusre page ke issue folder me pahuchna
        for(let i=0;i<allAnchorTags.length;i++)
        {
            let links=allAnchorTags[i].href;//yha se link aa jayegi ye complete link nhi hai
            let completeLink="https://github.com"+links//domain name+some part of link extracted from allAnchorTags using .href
            console.log(completeLink);//ab iss link par request lagao nyi link par
            request(completeLink,cb2);
        }

    }
}
function cb(error,response,html){
    if(error)
    console.log(error);
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        
    }
}