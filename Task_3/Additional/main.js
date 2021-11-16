// 1. Створити пустий масив та :

// a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// let x = 2;
// for (let i=0; i<50;i++){
//     arr[i]=x;
//     x=x+2;
// }
// console.log(arr)

//     b. заповнити його 50 непарними числами за допомоги циклу.
// let array = [];
// let x = 1;
// for (let i=0; i<50;i++){
//     array[i]=x;
//     x=x+2;
// }
// console.log(array)

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// let  array = [];
// for (i=0;i<20;i++){
//     array[i]=Math.floor(Math.random()*50);
// }
// console.log(array)

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let array = [];
// for (i=0;i<20;i++){
//     array[i]= Math.floor(Math.random()*732)+8;
// }
// console.log(array)

// 2. Вивести за допомогою console.log кожен третій елемен

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i=2;i<array.length; i+=3){
//         console.log(array[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i=2;i<array.length;i+=3){
//     if (array[i]%2===0) {
//         console.log(array[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let element = [];
// for (let i=2;i<array.length;i+=3){
//     if (array[i]%2===0) {
//          element[i] = array[i];
//     }
// }console.log(element);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i=0;i<array.length;i++){
//     if(array[i]%2===0){
//         console.log(array[i-1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let client = [100,250,50,168,120,345,188];
// let sum = 0;
// for (i=0;i<client.length;i++){
//     sum +=client[i]/client.length;
// }
// console.log(sum)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [];
// let element = [];
// for ( let i=0; i<10; i++){
//     array[i] = Math.floor(Math.random()*20);
//     element[i]= array[i]*5;
// }
// console.log(element);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array = [1,true,'fdsf',4,'octen',7,false,'hello','bye',45];
// let newarray=[];
// for (let i = 0; i<array.length;i++){
//     if(typeof array[i]==='number'){
//         newarray[i] = array[i];
//     }
// }
// console.log(newarray);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [1,2,3,4,5,6,7,8,9,10];
// for (let i=0;i<array.length;i++){
//     if (array[i]%2===0){
//         console.log(array[i])
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

//     let array = [1,2,3,4,5,6,7,8,9,10];
//     let newarray = [];
//     for (let i=0;i<array.length;i++){
//         newarray[i] = array[i];
//     }
// console.log(newarray)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let slovo = '';
// for (let i = 0; i<array.length;i++){
//     slovo += array[i];
// }
// console.log(slovo)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let slovo = '';
// let i= 0;
// while (i<array.length){
//     slovo +=array[i];
//     i++
// }
// console.log(slovo)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array = [ 'a', 'b', 'c'];
// let slovo = '';
// for (let i of array){
//     slovo +=i;
// }
// console.log(slovo)