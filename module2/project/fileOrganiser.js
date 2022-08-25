//task first how to take input
// let inputArr=process.argv;
// console.log(inputArr);//ye run akrne par ek array milega jiske 0th index par wo address hai jaha node install hai system me
//1st index par file ka path/address milega jisme ho
//ab input lete hai terminal par node fileOrganiser.js ke bad terminal me to wo usi array me 2nd index par milega
//ie jo input loge wo 2nd index se milega
                      //output
// ['pathTonode','pathTofile','input_jo_loge]//0th index node ka address and 1st index file ka address dega 2nd index inut btayega
let inputArr=process.argv;
console.log(inputArr);
let input=inputArr[2];
console.log(input);