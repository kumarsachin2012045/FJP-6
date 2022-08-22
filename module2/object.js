//empty object declaration
let obj={};
console.log(obj);
//object is key vlaue pair
let obj1={
    "Name":'sach',
    'Age':44,
    "phone no":8860503744,
    lastName:'saini'
}
console.log(obj1);
//key:value kuchh bhi ho sakta hai
let capAmerica={
    name:'steve',
    age:99,
    friends:['Natasha','Anju','preeti'],                   //value act as a array
    address:{                                             //value act as a object
        city:'Queens',
        state:'Haryana'
    },
    sayHi:function(){                                    //value act as a function
        console.log('capAmerica sayHiii');
    }
}
console.log(capAmerica);