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

// let btn = document.getElementsByClassName('btn')[0];
//
// btn.onclick = function (){
//     let age =   document.getElementById('age').value;
//     if (age < 18  ){
//         alert('Вам немає 18 років')
//     }else {
//         console.log('все добре. ви повнолітній')
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let div = document.getElementsByTagName('div')[0];
// let h2 = document.getElementsByTagName('h2')[0];
//
// h2.onclick = function (){
//     div.classList.toggle('hidden');
// }



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

// let arr = [{title:'олег' ,body:'вчиться в 5 класі'},{title:'іван' ,body:'вчиться в університеті'},
//             {title:'надія' ,body:'закінчила інститут'},{title:'василь' ,body:'працює'}];

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// for (const element of arr) {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = element.title;
//     let p = document.createElement('p');
//     p.innerText = element.body;
//     let button = document.createElement('button');
//     button.innerText = 'згорни мене'
//
//     button.onclick = function (){
//         p.style.display = 'none'
//     }
//
//
//     div.append(h2,p,button)
//     document.body.appendChild(div)
// }

