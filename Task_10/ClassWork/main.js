// - створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.createElement('form');
// form1.style.display = 'flex';
// form1.style.columnGap = '10px';
// form1.style.paddingBottom = '10px';
// form1.setAttribute('name', 'form1')
//
// let form2 = document.createElement('form');
// form2.style.display = 'flex';
// form2.style.columnGap = '10px';
// form2.style.paddingBottom = '10px';
// form1.setAttribute('name', 'form2')
//
// let userName = document.createElement('input');
// userName.style.background = 'silver';
// userName.style.width = '160px';
// userName.style.height = '30px';
// userName.setAttribute('name', 'username')
//
// let userAge = document.createElement('input');
// userAge.style.background = 'silver';
// userAge.style.width = '160px';
// userAge.style.height = '30px';
// userAge.setAttribute('name', 'userage')
//
// let userEmail = document.createElement('input');
// userEmail.style.background = 'green';
// userEmail.style.width = '160px';
// userEmail.style.height = '30px';
// userEmail.setAttribute('name', 'useremail')
//
// let userPassWord = document.createElement('input');
// userPassWord.style.background = 'green';
// userPassWord.style.width = '160px';
// userPassWord.style.height = '30px';
// userPassWord.setAttribute('name', 'userpassword')
//
// let button = document.createElement('button');
// button.style.width = '60px';
// button.style.height = '30px';
// button.innerText = 'save'
//
//
//
// form1.append(userName,userAge);
// form2.append(userEmail,userPassWord);
// document.body.append(form1,form2,button);
//
// button.onclick = function (){
//     console.log(userName.value);
//     console.log(userAge.value);
//     console.log(userEmail.value);
//     console.log(userPassWord.value)
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
//
//
// }



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
