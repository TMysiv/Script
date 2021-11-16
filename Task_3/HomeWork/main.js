// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

    // let num = [1,2,3,4,5];
    // let str = ['octen','hello','bye','html','css'];
    // let all = [true,57,'night','right',false];
    // console.log(num,str,all);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

    // let array = [];
    // array[0] = 'circus'
    // array[1] = 65;
    // array[2] = true;
    // array[3] = 'octen';
    // console.log(array);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//     for (let i = 0;i<10;i++){
//         // document.write(`<div>Lorem ipsum dolor.</div>`);
//     }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

//     for (let i = 0;i<10;i++){
//     document.write(`<div>${i}.Lorem ipsum dolor.</div>`);
//     }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    // let i = 0;
    // while (i<20){
    //     document.write(`<h1>Lorem ipsum.</h1>`);
    //     i++;
    // }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    // let i = 0;
    // while (i<20){
    //         document.write(`<h1>${i}.Lorem ipsum.</h1>`);
    //     i++;
    // }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

    // let num = [1,2,3,4,5,6,7,8,9,10];
    // for (let i=0; i<num.length; i++){
    //     console.log(num[i]);
    // }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    // let str = ['one','two','three','four','five','six','seven','eight','nine','ten'];
    // for (let i =0; i<str.length; i++){
    //     console.log(str[i]);
    // }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

    // let all = [1,'two',true,4,'five',false,7,'eight',9,'ten'];
    // for (let i =0; i<all.length; i++){
    //     console.log(all[i]);
    // }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

    // let all = [1,'two',true,4,'five',false,7,'eight',9,true];
    // for (let i = 0; i<all.length; i++){
    //     let element = all[i];
    //     if (typeof element === "boolean"){
    //         console.log(element);
    //     }
    // }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

    // let all = [1,'two',true,4,'five',false,7,'eight',9,true];
    // for (let i=0; i<all.length; i++){
    //     let newelement = all[i];
    //     if (typeof newelement === 'number'){
    //         console.log(newelement);
    //     }
    // }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

    // let all = [1,'two',true,4,'five',false,7,'eight',9,true];
    // for (let i=0; i<all.length; i++){
    //     let element = all[i];
    //     if (typeof element === 'string'){
    //         console.log(element);
    //     }
    // }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

    // let array = [];
    // array[0] = 1;
    // array[1] = true;
    // array[2] = 'hello';
    // array[3] = 45;
    // array[4] = false;
    // array[5] = 'bye';
    // array[6] = 923;
    // array[7] = true;
    // array[8] = 'octen';
    // array[9] = 432;
    // for (let i=0; i<array.length; i++){
    //     console.log(array[i]);
    // }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    // for (let i=1; i<=10; i++ ){
    //     console.log(i);
    //     document.write(`<h1>${i}</h1>`);
    // }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    // for (let i=1; i<=100; i++){
    //     console.log(i);
    //     document.write(`<h1>${i}</h1>`)
    // }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    // for (let i=1; i<=200; i+=2){
    //     console.log(i);
    //     document.write(`<h3>${i}</h3>`);
    //
    // }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

//     for (let i=1; i<=100; i++){
//         if (i%2===0){
//             console.log(i);
//             document.write(`<h3>${i}</h3>`);
//         }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    // for (let i =1; i<=100; i++){
    //     if ( i%2 !==0){
    //         console.log(i);
    //         document.write(`<h3>${i}</h3>`);
    //     }
    // }
