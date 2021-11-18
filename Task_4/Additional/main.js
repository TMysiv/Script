// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function unknownarguments(){
//    if (arguments.length ===1){
//        console.log(arguments[0])
//    }else if (arguments.length >1){
//        let res = arguments[0]+arguments[1];
//        console.log(res)
//    }
// }
// unknownarguments(5,32)

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE: [1,2,3,4] [2,3,4,5] результат [3,5,7,9]

// let firstarray = [1,2,3,4];
// let secondarray = [2,3,4,5];
// let newarray = [];
//
// function small(firstarray,secondarray) {
//     for (let first in firstarray) {
//         for (let second in secondarray) {
//             if (first === second) {
//                 newarray.push(firstarray[first] + secondarray[second]);
//             }
//         }
//     }return newarray
// }
// small(firstarray,secondarray);
// console.log(newarray)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}] ;
// let newarray = [];
// function massive(array) {
//     for (let field of array) {
//         for (let k in field) {
//             newarray.push(k)
////         }
//     }return newarray
// }
// massive(array)
// console.log(newarray)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}] ;
// let newarray = [];
// function massive(array){
//     for (let field of array){
//         for (let arrayKey in field) {
//             newarray.push(field[arrayKey])
//         }
//     }return newarray
// }
// massive(array)
// console.log(newarray)

