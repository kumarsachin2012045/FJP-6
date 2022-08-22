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
//accessing key
console.log(capAmerica.name);
console.log(capAmerica.age);
console.log(capAmerica.address);
console.log(capAmerica.friends);
console.log(capAmerica.sayHi);
//accesing array element
console.log(capAmerica.friends[0]);
console.log(capAmerica.friends[1]);
//acessing object key value
console.log(capAmerica.address.city);
console.log(capAmerica.address.state);
//accessing function
console.log(capAmerica.sayHi);
console.log(capAmerica.sayHi());//it give o/p capAmerica say hi with undefind
//kyo ki sayHi function kuchh return nhi kar raha hai isliye console.log me rakhne par undefined aayega
//ise remove karne karne ke liye console.log hatana padega 
capAmerica.sayHi();//function call

