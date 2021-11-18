// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minnumber(a,b,c){
//     if(a<b && a<c){
//         console.log(a);
//     }else if(b<a && b<c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
// minnumber(1,-5,2)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxnumber(a,b,c){
//     if(a>b && a>c){
//         console.log(a);
//     }else if(b>a && b>c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
// maxnumber(12,8,2)

// - створити функцію яка повертає найбільше число з масиву

// let array = [1,5,3,6,8,2];
// let element = 0;
// function maxnumberarray(array){
//     for (i=0;i<array.length;i++){
//         if (array[i]>element){
//             element=array[i]
//         }
//     }
//     return element
// }
// maxnumberarray(array)
// console.log(element)

// - створити функцію яка повертає найменьше число з масиву

// let array = [1,5,3,6,8,-7];
// let element = array[0];
// function minnumberarray(array){
//     for (i=0;i<array.length;i++){
//         if (array[i]<element){
//             element=array[i]
//         }
//     }
//     return element
// }
// minnumberarray(array)
// console.log(element)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let array = [1,2,10];
// let sum = 0 ;
// function summary(array){
//     for (i=0; i<array.length; i++){
//         sum +=array[i];
//     }
//     return sum
// }
// summary(array);
// console.log(sum)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [1,5,3,6,8,7];
// let sernum = 0;
// function sernumber(array){
//     for (i=0;i<array.length;i++){
//         sernum += array[i]
//         return sernum/array.length
//     }
// }
// sernumber(array)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let maxnumber = 0;
// function minmaxnumber(){
//     let minnumber = arguments[0]
//     for (i=0;i<arguments.length;i++) {
//             if (arguments[i]>maxnumber){
//                 maxnumber = arguments[i];
//             }else if(arguments[i]<minnumber){
//                 minnumber=arguments[i];
//             }
//
//     }
//     return minnumber
// }
// minmaxnumber(1,3,5,7)
// console.log(maxnumber)

// - створити функцію яка заповнює масив рандомними числами

// let array=[];
// function random_massive(size){
//     for (let i=0;i<size; i++){
//        array[i] =  Math.round(Math.random()*100);
//     }
//     console.log(array)
// }
// random_massive(21)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arr = [];
// function massive(size,limit){
//     for (i=0; i<size; i++){
//         arr[i]=Math.round(Math.random()*limit);
//     }
//     console.log(arr)
// }
// massive(6,300)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [];
// let number = [5,8,13];
// function zvorot(number){
//     for (let i = number.length - 1;  i >= 0; i--){
//         arr.push(number[i])
//     }
//     console.log(arr)
// }
// zvorot(number)
