// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id,name,surname,email,phone) {
    this.id = id;
    this.userName = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
let arrUser =[
    new User(45,'vasya','pupkin','sdf','380931111111'),
    new User(8,'olya','petrova','sdklsa','2103-321-'),
    new User(32,'katya','ivanova','fdsfds','12213112'),
    new User(74,'oleg','shevchenko','fdsfsfs','323224'),
    new User(11,'petya','loik','s2','42141421'),
    new User(6,'vasya','pupkin','sdf','380931111111'),
    new User(17,'olya','petrova','sdklsa','2103-321-'),
    new User(88,'katya','ivanova','fdsfds','12213112'),
    new User(99,'oleg','shevchenko','fdsfsfs','323224'),
    new User(21,'petya','loik','s2','42141421')
]
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterFunction = (arrUser) => {
    let filter = arrUser.filter(value => value.id % 2  ===0 )
    return filter
}
console.log(filterFunction(arrUser));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortFunction = (arrUser) =>{
    let sort = arrUser.sort((a, b) => a.id - b.id);
    return sort
}
console.log(sortFunction(arrUser));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
     constructor(id, clientName, surname, email, phone, order) {
        this.id = id;
        this.clientName = clientName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let arrClient =[
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник','фломастер','скрепки','ножиці','портфель','книжка','пинал']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник','фломастер']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник','фломастер','скрепки','ножиці','портфель']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник','фломастер','скрепки','ножиці','портфель','книжка']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник','фломастер']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник','фломастер','скрепки']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник','фломастер','скрепки','ножиці']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка']),
    new Client(23,'vasya','pupkin','fdkflsf','2113193102',['ручка','олівець','щоденник']),
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let fn = (arrClient) => {
    let sortclient = arrClient.sort((a, b) => a.order.length-b.order.length);
    console.log(sortclient)
}
fn(arrClient)