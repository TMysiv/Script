
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.forms.f1;
let name = form.name;
let number = form.number;
let price = form.price;
let image = form.image;


let shop = (name,number,price,image) =>{
    let arr = JSON.parse(localStorage.getItem('shopProduct')) || [];
    arr.push({name,number,price,image});
    localStorage.setItem('shopProduct',JSON.stringify(arr))
}
form.onsubmit = function (e){
e.preventDefault();
shop(name.value,number.value,price.value,image.value)
}

