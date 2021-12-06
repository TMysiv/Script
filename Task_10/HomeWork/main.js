// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let reset = document.getElementsByClassName('reset')[0];
// let id = document.getElementById('text');
// reset.onclick = function (){
//     id.innerText = null
// }

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let reset = document.getElementsByClassName('reset')[0];
// reset.onclick = function (){
//     reset.style.display = 'none'
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input');
// input.setAttribute('number', 'age')
// let button = document.createElement('button');
// button.innerText = 'approve'
//
// document.body.append(input,button)
//
// button.onclick = function (){
//     if (input.value < 18){
//         alert('ви ще дуже малі')
//     }
//     else{
//         console.log('все добре')
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let div = document.createElement('div');
// div.classList.add('menu');
// div.innerText = 'menu';
// let ul = document.createElement('ul');
// let li = document.createElement('li');
// li.innerText = 'item'
// let node1 = li.cloneNode(true);
// let node2 = li.cloneNode(true);
//
// document.body.append(div);
// div.append(ul);
// ul.append(li,node1,node2)
//
// div.onclick = function (){
//     ul.classList.toggle('hidden');
// }



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

// let arr = [{title:'олег' ,body:'вчиться в 5 класі'},{title:'іван' ,body:'вчиться в університеті'},
//             {title:'надія' ,body:'закінчила інститут'},{title:'василь' ,body:'працює'}];

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// for (const element of arrComments) {
//
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     button.innerText = 'sometext'
//
//     h2.innerText = element.title;
//     p.innerText = element.body;
//
//     document.body.append(div);
//     div.append(h2,p,button);
//
//     button.onclick = function (){
//         p.style.display = 'none'
//     }
//
// }

