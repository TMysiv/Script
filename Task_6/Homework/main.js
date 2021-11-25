// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let x = 'hello world';
// console.log(x.length);
// let y = 'lorem ipsum';
// console.log(y.length);
// let z = 'javascript is cool';
// console.log(z.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(x.toUpperCase());
// console.log(y.toUpperCase());
// console.log(z.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL'
// console.log(a.toLowerCase(),b.toLowerCase(),c.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

//     let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';

// let str = 'Каждый охотник желает знать';
// let arrStr = (str)=> {
//     let split = str.split(' ');
//     console.log(split);
// }
// arrStr()

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать'
// let delete_characters= (str,index) =>{
//     return str.substring(0,index)
// }
// console.log(delete_characters(str, 6));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str)=>{
//     return str.replaceAll(' ','-').toUpperCase();
// }
//
// console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'hello octen';
// let fn = (str)=>{
//     return str[0].toUpperCase()+str.slice(1);
// }
// console.log(fn(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// let capitalize = (str) =>{
//     return str.split(' ').map(value => value[0].toUpperCase()+value.slice(1)).toString().replaceAll(',', ' ');
// }
// console.log(capitalize('hello octen day night winter summer'));




