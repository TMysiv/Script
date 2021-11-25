// - Дано натуральное число n. Выведите все числа от 1 до n.
//
// let naturalne = (n) => {
//     if (n >= 1 && Number.isInteger(n)) {
//         for (let i=1; i <= n; i++) {
//             console.log(i)
//         }
//     } else {
//         console.log('ви ввели не натуральне число')
//     }
// }
// naturalne(15)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let perevirka = (A,B) =>{
//     if (Number.isInteger(A) && Number.isInteger(B)){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let cilichusla = (A,B) => {
//     if(A<B && perevirka(A,B)){
//         for (let i=A; i<=B; i++){
//             console.log(i)
//         }
//     }else if(A>B && perevirka(A,B)){
//         for (let i=A;i>=B;i--){
//             console.log(i)
//         }
//     }else {
//         console.log('ввели не ціле число')
//     }
// }
// cilichusla(4,17)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let array = [9,8,0,4];
// let foo = (array,i) =>{
//     let x = array[i+1];
//     for (let j = 0; j < array.length; j++) {
//         if (j === i ){
//             array[j+1] = array[j];
//             array [j]= x;
//         }
//     }
//     console.log(array)
// }
// foo(array,2)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let array = [1,0,6,0,3] ;
// let arr = [];
// let fn = (array) =>{
//     let nul = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== 0){
//             arr.push(array[i])
//         }
//         else if (array[i]===0){
//             nul.push(array[i])
//         }
//         else {
//             return  0;
//         }
//     }return arr.concat(nul)
// }
// console.log(fn(array));








