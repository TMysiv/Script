// - створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement('form');
// form1.setAttribute('name','form1')
// let form2 = document.createElement('form');
// form2.setAttribute('name','form2')
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name', 'one')
//
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name', 'two');
//
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name', 'three');
//
// let inputFour = document.createElement('input');
// inputFour.setAttribute('name', 'four');
//
// let button = document.createElement('button');
// button.innerText = 'approve'
//
// document.body.append(form1,form2,button);
// form1.append(inputOne,inputTwo);
// form2.append(inputThree,inputFour);
//
// button.onclick =function (){
//     console.log(inputOne.value)
//     console.log(inputTwo.value)
//     console.log(inputThree.value)
//     console.log(inputFour.value)
// }




// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'create table';
//
// button.onclick = function (){
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let text = inputThree.value;
//
//     function createTable (tr,td,text){
//        let table = document.createElement('table');
//        table.style.border = '1px solid black';
//        document.body.appendChild(table);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue'
//
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border= '1px solid green';
//                 table.appendChild(tr);
//                 td.innerText = text
//                 tr.appendChild(td);
//
//             }
//         }
//     }
//     createTable(tr, td, text);
// }
// document.body.append(inputOne,inputTwo,inputThree,button)




// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arrBedWords = ['xxx','yyy','zzz','qqq'];
// let input = document.createElement('input');
// input.setAttribute('type','text');
// let button = document.createElement('button');
// button.innerText = 'перевірка'
//
// document.body.append(input,button)
//
// button.onclick = function (){
//     let inputText = input.value;
//         for (const element of arrBedWords) {
//             if (element === inputText){
//                 alert('це дуже погане слово')
//             }
//             else {
//                 console.log('гарного дня')
//             }
//         }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let arrBedWords = ['xxx','yyy','zzz','qqq'];

let input = document.createElement('input');
input.setAttribute('type', 'text');
let button = document.createElement('button');
button.innerText = 'перевірка';
document.body.append(input,button)

button.onclick = function (){

    for (const element of arrBedWords) {
        if (input.value.includes(element)){
            alert('в речені є погане слово')
        }
        else{
            console.log('okay')
        }
    }
}
