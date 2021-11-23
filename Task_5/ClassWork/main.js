// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let smallnumber = (a,b,c) =>{
//     if (a<b && a<c){
//         console.log(a);
//     }else if(b<a && b<c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// smallnumber(8,9,7)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let bignumber = (a,b,c) =>{
//     if (a>b && a>c){
//         console.log(a);
//     }else if(b>a && b>c){
//         console.log(b);
//     }else {
//         console.log(c);
//     }
// }
// bignumber(9,5,7)

// - створити функцію яка повертає найбільше число з масиву

// let maxnumber = (array) =>{
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max<array[i]){
//             max = array[i];
//         }
//     }return max
// }
// console.log(maxnumber([3, 6, 9, 1, 2, 10, 7, 4]));

// - створити функцію яка повертає найменьше число з масиву

// let minnumber = (array) =>{
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (min > array[i]){
//             min = array[i];
//         }
//     }return min
// }
// console.log(minnumber([3, 6, 9, 1, 2, 10, 7, 4]));

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumnumber = (array) =>{
//     let sum = 0;
//     for (let i = 0; i <array.length; i++) {
//         sum += array[i];
//     }return sum
// }
// console.log(sumnumber([1, 2, 10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let sernumber = (array) =>{
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }return sum/array.length
// }
// console.log(sernumber([3, 4, 5]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let fn = (...arg) =>{
//     let min = arg[0];
//     let max = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if (max < arg[i]){
//             max = arg[i];
//         }
//         else if(min > arg[i]){
//             min = arg[i];
//         }
//     }
//     console.log(max)
//     return min
// }
// console.log(fn(6, 3, 5, 7, 2, 4, 9));

// - створити функцію яка заповнює масив рандомними числами

// let array = [];
// let fn = (size) =>{
//     for (let i = 0; i < size; i++) {
//         array[i]= Math.round(Math.random()*100);
//         array.push(array[i])
//     }
//     return array
// }
// console.log(fn(15));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let array = []
// let fn = (size,limit) => {
//     for (let i = 0; i < size; i++) {
//         array[i]= Math.round(Math.random()*limit);
//         array.push(array[i])
//     }
//     return array
// }
// console.log(fn(15, 500));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let array = [];
// let fn = (arr) =>{
//     for (let i = arr.length-1; i >=0 ; i--) {
//         array.push(arr[i])
//     }
//     return array
// }
// console.log(fn([1, 2, 3]));