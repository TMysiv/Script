// - створити функцію яка обчислює та повертає площу прямокутника висотою

//     let ploscha = (a,b) => {return a * b};
// console.log(ploscha(5, 4));


// - створити функцію яка обчислює та повертає площу кола

//     let ploschaKola = (Pi,r) => {return Pi * r **2};
// console.log(ploschaKola(3.14, 5));

// - створити функцію яка обчислює та повертає площу циліндру

// let ploschacelindra = (Pi,r,h) => {return 2 * Pi * r *h};
// console.log(ploschacelindra(3.14, 5, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = (array)=>{
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }
// array([1,2,3,4,5])

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraph = (sometext) => {
//     document.write(`<p>${sometext}</p>`);
// }
// paragraph('hello world.the weather is good')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let fn = (sometext) => {
//     document.write(`<ul>`)
//     document.write(`<li>${sometext}</li>`)
//     document.write(`<li>${sometext}</li>`)
//     document.write(`<li>${sometext}</li>`)
//     document.write(`</ul>`)
// }
// fn('Lorem ipsum dolor sit.')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let fn = (sometext,size) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < size; i++) {
//         document.write(`<li>${sometext}</li>`);
//     }
//     document.write(`</ul>`);
// }
// fn('Lorem ipsum dolor sit.',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let fn = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// fn([1,true,'hello',7,false,'octen'])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let fn = (array) => {
//     for (const field of array) {
//         document.write(`<div>${field.id} ${field.name} ${field.age}</div>`);
//     }
// }
// fn([{id:1,name: 'olya', age:30},{id:2,name:'vasya',age: 45},{id:21,name: 'petya',age: 10}])