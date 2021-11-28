// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function  Car (model,manufacturer,year,maxSpeed,engine){
//     this.model=model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed=maxSpeed;
//     this.engine = engine
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год `)
//     }
//     this.info = function (){
//         for (let key in this) {
//             if (typeof this[key] !=='function'){
//             console.log(key, this[key])
//         }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed+newSpeed
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//
//     }
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
// }
// let car = new Car('focus','Ford',2008,240,1.6);
// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2015)
// car.addDriver('vasya ivanov')
// car.info();
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car2{
//     constructor(model, manufacturer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive ()  {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год `)
//     }
//     info (){
//         for (let key in this) {
//             console.log(key,this[key])
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maxSpeed = this.maxSpeed+newSpeed
//     }
//     changeYear(newValue){
//         this.year = newValue;
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
// }
// let car = new Car2('focus','ford',2008,240,1.6)
// car.drive();
// car.info()
// car.increaseMaxSpeed(50);
// car.changeYear(2015);
// car.addDriver('petya')
// car.info()



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Popelushka{
//     constructor(namePopelushka, age, sizeLeg) {
//         this.namePopelushka = namePopelushka;
//         this.age = age;
//         this.sizeLeg = sizeLeg;
//     }
// }
//
// let arrPopelushka = [
//     new Popelushka('olya',30,36),
//     new Popelushka('katya',25,37),
//     new Popelushka('sveta',24,38),
//     new Popelushka('ira',28,35),
//     new Popelushka('galya',15,34),
//     new Popelushka('alina',18,39),
//     new Popelushka('natalia',31,34),
//     new Popelushka('oksana',12,33),
//     new Popelushka('olena',8,32),
//     new Popelushka('victoria',19,31),
// ]
// console.log(arrPopelushka)


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Person {
//         constructor(personName, age) {
//         this.personName = personName;
//         this.age = age;
//     }
// }
// class Prince extends Person{
//     constructor(personName, age, tufelka) {
//         super(personName, age);
//         this.tufelka = tufelka;
//     }
// }
// let prince = new Prince('Villiam',40,36);
// console.log(prince)
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// function help(arrPopelushka,prince){
//     for (let i = 0; i < arrPopelushka.length; i++) {
//         if (arrPopelushka[i].sizeLeg === prince.tufelka){
//             console.log(arrPopelushka[i])
//         }
//     }
// }
// help(arrPopelushka,prince)

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    // let find =  arrPopelushka.find(value => value.sizeLeg === prince.tufelka)
    // console.log(find)
