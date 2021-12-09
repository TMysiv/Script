// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивестu в документ всіх обраних на попередньому етапі.

let x = 'userAdd';
localStorage.setItem(x,JSON.stringify([]))

for (const key of users) {
    let box = document.createElement('div');
    box.innerText = `${key.name},  ${key.age},  ${key.status}`;
    box.style.border = '1px solid black';
    let button = document.createElement('button');
    button.innerText = 'додати до улюблених';
    document.body.append(box);
    box.append(button);

    button.onclick = function (){
        let favorite = JSON.parse(localStorage.getItem(x));
        favorite.push(key)
        localStorage.setItem(x,JSON.stringify(favorite))

    }
}

