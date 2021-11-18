// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

    // function ploscha(a, b){
    //     return a * b;
    // }
    // let x1 = ploscha(7,8);
    // console.log(x1);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

    // function round (Pi,r){
    //     return Pi * r**2;
    // }
    // let x = round(3.14,5)
    // console.log(x)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

    // function culindr(Pi,r,h){
    //     let result = 2*Pi*r*h;
    //     return result;
    // }
    // let res =  culindr(3.14,3,10);
    // console.log(res)

// - створити функцію яка приймає масив та виводить кожен його елемент

    // function massive (array) {
    //     for (i = 0; i < array.length; i++) {
    //         console.log(array[i])
    //     }
    // }
    // let array =[1,2,3,4,5]
    // massive(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

    // function paragraf (text){
    //     document.write(`<p>text</p>`)
    // }
    // paragraf('item');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    // function text(item){
    //     document.write(`<ul>`);
    //         for (i=0;i<3;i++) {
    //             document.write(`<li>${item}</li>`)
    //         }
    //     document.write(`</ul>`)
    // }
    // text('lorem dskfggggg')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function  sometext(item,li){
//     document.write(`<ul>`);
//     for (i=0; i<li;i++) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
//     sometext('lorem ipsum',15)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [1,'heloo',true,2,'octen',false];
// function massive(array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// massive(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {id:1 ,name: 'Vasya',age:15},
//     {id:2 ,name: 'olya',age:30},
//     {id:3 ,name: 'petya',age:48},
//     ];
// function massive(array){
//     for (i=0;i<array.length;i++){
//         document.write(`<div>`)
//         document.write(`${array[i].id} ${array[i].name} ${array[i].age}`)
//         document.write(`</div>`)
//     }
// }
// massive(array)


