// string + boolean 
// console.log('smth'+ true);
// string + nu,ber 
// console.log('smth'+ 23);
// number + boolean 
// console.log(23 + true);

const { boolean } = require("yargs")

//string * boolean 
// console.log('smth' * true)
// string * number
//console.log('smth'* 23);
// number + boolean 
// console.log(23 * true);

//string / boolean 
//  console.log('smth' / true)
// string * number
//console.log('smth'/ 23);
// number + boolean 
// console.log(23 / true);

// явное преобразование в string
// let a = 123 
// console.log(typeof a.toString())
// явное преобразование в number 
// let a = '123' 
//  console.log(typeof Number(a))
//явное преобразование в boolean 
let a = 123
console.log(typeof Boolean(a))
