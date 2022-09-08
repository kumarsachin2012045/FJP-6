//line 2 se line 37 tak json-as-xlsx ka format iski side json-as-xlsx se pick kiya aur yaha paste kiya iska use karke json file ko excel me convert kar sakte hai
let xlsx = require("json-as-xlsx")//yha iska module require kiya jaise pahle karte the that means iss module ko use karenge

let data = [//jaise json array of object hai oaise data bhi array of object hai isme 2 object hai to 2 sheet bnegi
  {
    sheet: "Adults",
    columns: [
      { label: "User", value: "user" }, // Top level data
      { label: "Age", value: (row) => row.age + " years" }, // Custom format
      { label: "Phone", value: (row) => (row.more ? row.more.phone || "" : "") }, // Run functions
    ],
    content: [
      { user: "Andrea", age: 20, more: { phone: "11111111" } },
      { user: "Luis", age: 21, more: { phone: "12345678" } },
    ],
  },
  {
    sheet: "Children",
    columns: [
      { label: "User", value: "user" }, // Top level data
      { label: "Age", value: "age", format: '# "years"' }, // Column format
      { label: "Phone", value: "user.more.phone", format: "(###) ###-####" }, // Deep props and column format
    ],
    content: [
      { user: "Manuel", age: 16, more: { phone: 9999999900 } },
      { user: "Ana", age: 17, more: { phone: 8765432135 } },
    ],
  },
]

let settings = {//setting object me file ka nam hai aur kitne column ki length rakhni wo hh 
  fileName: "MySpreadsheet", // Name of the resulting spreadsheet
  extraLength: 3, // A bigger number means that columns will be wider
  writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
}

xlsx(data, settings) // Will download the excel file
//run karne par ek excel sheet bnegi jo file name diye ho usi ke name ki
//mere system me excel viewer nhi hai to online excel viewer(iss side ki pahli website hai uspar upload kroge jo file bni hai to dikh jayegi) par jakar dekhte hai
//xlsx excel file ka estension hai
//isme do object hai to do sheet bnegi 
//data array of object hai ye no of sheet btata hai(jitna object utna sheet) and column dine karta hai
//aur content me btate hai ki har column me kya fill karna h
//sheet me column bnate hai content me value ke corresponding cell define karte hai
//jo different-2 object hai wo sheet represent kar raha h uske bad do cheeje hoti hai
//column me jo level hai wo heading ki tarah kam karta hai//dusra content ye btata hai ki ukse neeche data kya leke jaoge
//column me jo value hai wo key hai jo content me milegi 
//content ka pahla object pahle column ke neeche show karega similarly dusra object dusre column ke neeche 
//setting me bass file ka name aur column ki size 
//xlsx(data,setting )ye excel file karke deta h 
//hamare leader bord wale me content leaderbord hai aur hme ek hi sheet chahiye to data me ek hi object rakhenge
//aur leaderbord me sare object ese [{Name:"preeti",Innings:"45",Runs:"343",Balls:"232",Fours:"43",Sixes:"21"}
//                                  {Name:"Anju",Innings:"45",Runs:"343",Balls:"232",Fours:"43",Sixes:"21"}..]
//jo value me Name naam ki key hai uske coressponding object(ye object content me hai) me jitne different naam hai sare use kar lo Name column me
//jo value me Innings naam ki key hai uske coressponding object me jitne different Innings hai sare use kar lo Innings wale column me