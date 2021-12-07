// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e){
//
//     console.log(`tag :${e.target.tagName},class: ${e.target.className},id :${e.target.id},height : ${e.target.clientHeight} px,width : ${e.target.clientWidth} px`)
//
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e){
//             let div = document.createElement('div');
//             div.style.border = '3px solid black';
//             div.style.width = '200px';
//             div.classList.toggle('hidden')
//             let ul = document.createElement('ul');
//             let li1 = document.createElement('li');
//             let li2 = document.createElement('li');
//             let li3 = document.createElement('li');
//             let li4 = document.createElement('li');
//             let li5 = document.createElement('li');
//             li1.innerText = `tag = ${e.target.tagName}`;
//             li2.innerText = `class = ${e.target.className}`;
//             li3.innerText = `id = ${e.target.id}`;
//             li4.innerText = `width = ${e.target.clientWidth}`;
//             li5.innerText = `height = ${e.target.clientHeight}`;
//             document.body.appendChild(div);
//             div.appendChild(ul);
//             ul.append(li1, li2, li3, li4, li5);
//
// }


// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let checkboxOne = document.createElement('input');
// checkboxOne.type = 'checkbox';
// let checkboxTwo = document.createElement('input');
// checkboxTwo.type = 'checkbox';
// let checkboxThree = document.createElement('input');
// checkboxThree.type = 'checkbox';
// let button = document.createElement('button')
// button.innerText = 'filter'
//
// document.body.append(checkboxOne,checkboxTwo,checkboxThree,button)
//
// function func(array) {
//     let glob = document.createElement('div');
//     array.forEach(value => {
//         let user_div = document.createElement('div');
//         user_div.innerHTML = `${value.id} - ${value.name}- ${value.age}- ${value.status}- ${value.address.city}`;
//         glob.appendChild(user_div);
//     })
//     return glob;
// }
// document.body.append(func(usersWithAddress))
//
//
// button.onclick = function () {
//     let arr = usersWithAddress
//     if (checkboxOne.checked) arr =arr.filter(value => value.status === false);
//     if (checkboxTwo.checked) arr = arr.filter(value => value.age > 29);
//     if (checkboxThree.checked) arr = arr.filter(value => value.address.city === 'Kyiv');
//     document.body.appendChild(func(arr))
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let prev_button = document.getElementsByClassName('prev')[0];
// let nextButton = document.getElementsByClassName('next')[0];
//
// let images = document.getElementsByClassName('images');
// let i = 0;
//
// nextButton.onclick = function (){
//     images[i].style.display = 'none';
//     i = i + 1;
//     if(i >= images.length) {
//         i = 0;
//     }
//     images[i].style.display = 'block'
// }
// prev_button.onclick = function (){
//     images[i].style.display = 'none';
//     i = i - 1;
//     if(i < 0){
//         i = images.length - 1;
//     }
//     images[i].style.display = 'block'
// }


