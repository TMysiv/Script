// Наш новий бос, як виявилося, просто ненавидить голосні літери, тому нам потрібно прибрати їх з усієї документації.
//     Напиши функцію removeVowels, яка приймає рядок document і повертає рядок, де усі голосні з document видалені.
//     Голосними для цього завдання вважаються букви aeiouy в будь-якому регістрі.
//     Приклади:
// removeVowels('document') === 'dcmnt'
// removeVowels('I like my boss') === ' lk m bss'
// removeVowels('350 euro') === '350 r'

// let removeVowels = (document) => {
//     let doc = document.toLowerCase().split('');
//     let str = ''
//     for (let d of doc) {
//         if (d !== 'i'&& d !=='o' && d!=='a' && d !=='y' && d !=='u' && d !== 'e'){
//             str = str + d;
//         }else {
//             false;
//         }
//     }
//     return str
// }
// console.log(removeVowels('I like my boss'));

// Нещодавно археологи знайшли старі записи древньої цивілізації. Виявляється у них вже була розвинена писемність і була своя мова.
// Але найкрутіше з цього всього те, що говорили вони просто задом наперед. Археологи відправили знахідку нам на розшифровку.
//     Давай розшифруємо decryptMessage послання message древньої цивілізації нащадкам!!!
//     Приклади:
// decryptMessage('!!!reeb gniknird ekil eW') === 'We like drinking beer!!!'
// decryptMessage('0202 ni eb lliw cimednap surivanoroc A') === 'A coronavirus pandemic will be in 2020'

// let decryptMessage = (message) => {
//     let split = message.split('');
//     console.log(split.reverse().join(''));
// }
// decryptMessage('0202 ni eb lliw cimednap surivanoroc A')

    // До нас дійшла інформація, що перевертні можуть бути небезпечними для людей. Ми ще не знаємо чому, але ігнорувати цю інформацію не можемо.
    //     Треба якомога швидше почати виявляти isWerewolf перевертнів. Пропонуємо для початку за ціль target брати слова і речення. Вони далеко не втечуть в разі чого.
//     Як ми зрозуміли, серед слів і речень перевертні - це ті слова, які читаються в обох напрямках однаково і при цьому ігнорують пробіли і розділові знаки.
    //     Напиши, будь ласка, функцію isWerewolf, яка отримує рядок target і повертає true, якщо це перевертень.
    //     Примітка: target може містити латинські літери (і великі, і малі), пробіли та розділові знаки.
    //     Приклади:
    // isWerewolf('rotator') === true // rotator --> rotator
    // isWerewolf('home') === false // home --> emoh
    // isWerewolf('racecar') === true
    // isWerewolf('red rum sir is murder') === true
    // isWerewolf('eva, can i see bees in a cave') === true

 let isWerewolf = (target) => {
    let str = target.replaceAll(' ', '').replaceAll(',', '');
     console.log(str)
}
isWerewolf('rotator')




