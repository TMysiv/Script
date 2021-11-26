// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) =>{
//     let array = [];
//     while (str.length){
//     array.push(str.substring(0,n))
//         str = str.split(n)
//     }return array
// }
// console.log(cutString('наслаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
//     наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
//     функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let validator = (str)=>{
//     let strLower = str.toLowerCase().trim();
//     if (strLower.includes('@') && (strLower.indexOf('@') === strLower.lastIndexOf('@')) ){
//         let splitStrLower = strLower.split('@');
//         let split = splitStrLower[1].split('.');
//             if (splitStrLower[0].length>2 && split[0].length>=2){
//                 return strLower
//             }
//             else {
//                 return 'емейл не правильний'
//             }
//     }else {
//         return false
//     }
// }
// console.log(validator('some.email@gmail.com'));





// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// let sortArray = (coursesArray)=>{
//     coursesArray.map(value => value.leng = value.modules.length)
//     coursesArray.sort((a, b) => b.leng-a.leng);
//     return coursesArray
// }
// console.log(sortArray(coursesArray));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let stringsearch = (str,symb)=>{
//     let num = str.indexOf(symb)
//     return num+1
// }
//     console.log(stringsearch('Астрономия это наука о небесных объектах', 'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutstring = (str,n)=>{
//     let arr = str.split(' ').slice(0,n).join(' ')
//     return arr
// }
// console.log(cutstring('Сила тяжести приложена к центру масс тела', 5));