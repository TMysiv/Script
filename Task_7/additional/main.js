// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id,name, userName, email,adressStreet,adressSuite,adressCity,adressZipcode,geoLat,geoLng ,phone, website,nameCompany,catchPhraseCompany,bsCompany) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.adress = { street : adressStreet, suite :adressSuite, city: adressCity, zipcode : adressZipcode, geo:{lat:geoLat,lng:geoLng } }
        this.phone = phone;
        this.website = website;
        this.company = {name : nameCompany, catchPhrase : catchPhraseCompany, bs : bsCompany }
    }
}

let user1 = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556',
    'Gwenborough', '92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona',
'Multi-layered client-server neural-net','harness real-time e-markets') ;
console.log(user1)


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Teg {
     constructor(titleOfTag, action,attrsSintaksis,attrsAtribyte,attrsSpecification,attrsDescription) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [{sintaksis : attrsSintaksis,atribyte : attrsAtribyte},{specification : attrsSpecification,description: attrsDescription}]
    }
}

let teg1 = new Teg('a',' устанавливает ссылку или якорь','<a href="URL">...</a>','Активация ссылки с помощью комбинации клавиш.',
    'следует сделать ссылку','Тег <a> является одним из важных элементов HTML ');
let teg2 = new Teg ('div','Задает выравнивание содержимого тега <div>.','<div>...</div>',
    'Обязателен.','Чтобы не описывать каждый раз стиль внутри тега',' является блочным элементом')
console.log(teg1,teg2)




