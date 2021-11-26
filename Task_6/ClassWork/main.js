// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let fn = (n) => {
//     return n.replace('.',' ')
//         .replaceAll('.','')
//         .replace('-',' ')
//         .replaceAll('-','')
//         .replace('_',' ')
//         .replaceAll('_','')
// }
// console.log(fn('Harry..Potter'));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = (size)=>{
//     let array =[];
//     for (let i=0; i<=size; i++) {
//         array[i] = Math.round(Math.random()*100)
//         array.push(array[i])
//     }
//     return array
// }
// let result = arr(10);
// console.log(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// result.sort((a, b) =>{return a-b});
// console.log(result)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let parni= result.filter(value => value %2 ===0);
// console.log(parni)

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let fn = (size,number)=>{
//     let array =[];
//     for (let i = 0; i <= size; i++) {
//         array[i]=Math.round(Math.random()*number);
//         array.push(array[i]);
//     }return array.map(value => value.toString())
// }
// let result = fn(15,100);
// console.log(result)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (array,direction)=>{
//     if (direction ==='ascending' ){
//         return array.sort((a, b) => a-b)
//     }else if (direction ==='descending'){
//         return  array.sort((a, b) => b-a)
//     }else {
//         return 0
//     }
// }
// let sort = sortNums([11,21,3],'descending');
// console.log(sort)

// - є масив
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// let sortArray = (coursesAndDurationArray)=>{
//     return coursesAndDurationArray.sort((a, b) => b.monthDuration-a.monthDuration)
// }
// let sort = sortArray(coursesAndDurationArray);
// console.log(sort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let  sortArray = (coursesAndDurationArray)=>{
//     return   coursesAndDurationArray.filter(value => value.monthDuration >5)
// }
// let filter = sortArray(coursesAndDurationArray);
// console.log(filter)










