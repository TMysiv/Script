// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас тексту елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)

    // let changeClass = document.getElementById('main_header');
    // changeClass.classList.toggle('september-2021')

// b) робить шириниу елементу ul 400px

    // let ulList = document.getElementsByTagName('ul');
    // for (const ul of ulList) {
    //     ul.style.width = '400px';
    // }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementClass = document.getElementsByClassName('linkList')
// for (const key of elementClass) {
//     key.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let textClass = document.getElementsByClassName('listElement2')
// for (const text of textClass) {
//     console.log(text.innerText)
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liAll = document.getElementsByTagName('li');
// for (let liAllElement of liAll) {
//     liAllElement.style.background = 'grey'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aElement = document.getElementsByTagName('a');
// for (const element of aElement) {
//     element.classList.add('anchor')
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let aElement = document.getElementsByTagName('a');
// for (const element of aElement) {
//     if (element.innerText.includes('link3')){
//         element.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a


// let aElement = document.getElementsByTagName('a');
// for (const element of aElement) {
//     element.classList.add(`'element_${element.innerText}'`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let changeBackground = document.getElementsByClassName('sub-header');
//
// for (const changeBackgroundElement of changeBackground) {
//     changeBackgroundElement.style.background = prompt('введіть колір фону')
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let changeBackground = document.getElementsByClassName('sub-header');
// for (const key of changeBackground) {
//     if (key.innerText.includes('content 2 segment')) {
//         key.style.background = prompt('введіть колір фону')
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let textChange = document.getElementsByClassName('content_1');
// for (const textChangeElement of textChange) {
//     textChangeElement.innerText = prompt('введіть довільний текст')
// }


// l) отримати елементи p та змінити їм padding на 20px

// let paddingP = document.getElementsByTagName('p');
// for (const pElement of paddingP) {
//     pElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementChange = document.getElementsByClassName('text2');
// for (const key of elementChange) {
//     key.innerText = 'september-2021'
// }