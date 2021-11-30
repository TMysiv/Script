// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// -- отримує текст з параграфа з id "content"

    // let textP = document.getElementById('content')
    // console.log(textP.innerText)


// -- отримує текст з блоку з id "rules"

    // let textDiv = document.getElementById('rules');
    //     console.log(textDiv.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший

    // let textContent = document.getElementById('content');
    // textContent.innerText = 'Lorem ipsum dolor.'


// -- замініть текст параграфа з id 'rules' на будь-який інший

    // let textRules = document.getElementById('rules');
    // textRules.innerText ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, facilis.'


// -- змініть кожному елементу колір фону на червоний

// for (const key of document.body.children) {
//     key.style.background = 'red'
// }

// // -- змініть кожному елементу колір тексту на синій
// for (const key of document.body.children) {
//     key.style.color = 'blue'
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// let a = document.getElementById('rules');
// console.log(a.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let rulesClass = document.getElementsByClassName('fc_rules');
// for (const key of rulesClass) {
//     key.style.color = 'red'
// }