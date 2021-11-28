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
    constructor(id,name, userName, email,  phone, website) {
        this.id = id;
        this.name = name
        this.userName = userName;
        this.email = email;
        this.adress = function (street,suite,city,zipcode,){
            this.street = street;
            this.suite = suite;
            this.city = city;
            this.zipcode= zipcode;
            this.geo =function (lat,lng){
                this.lat = lat;
                this.lng = lng;
            }
        }
        this.phone = phone;
        this.website = website;
        this.company = function (companyName,catchPhrase,bs){
            this.companyName=companyName;
            this.catchPhrase=catchPhrase;
            this.bs=bs;
        }

    }
}
let user =new User(1,'Leanne Graham','Bret','Sincere@april.biz','1-770-736-8031 x56442','hildegard.org');
user.adress('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874');
user.company('Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets')
user.geo('-37.3159','81.1496')
console.log(user)

