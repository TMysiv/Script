let money = 50;

function getUp (get){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (get){
                resolve('я прокинувся')
            }else {
                reject('хочу ще спати')
            }
        },1500)
    })

}
function brushTeeth (time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 7.5){
                resolve ('іду чистити зуби')
            }else {
                reject ('треба бішти снідати')
            }
        },500)
    })

}

function  breakfast (time){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (time < 8 ){
                resolve('швиденько снідаю');
            }else {
                reject('поїм на роботі')
            }
        }, 1000)
    })

}

function job (doMyWork){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (doMyWork){
                money +=500;
                console.log(money +'hrn')
                resolve('відпрацював день')
            }else {
                reject('сьогодні вихідний')
            }
        },2000)
    })

}

function shop (check){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > check){
                resolve('ми скупились');
            }else {
                reject('сьогодні ідемо в гості))')
            }
        },1300 )
    })

}

function supper(food){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food === 'yes'){
                resolve('готуэмо вечерю');
            }else {
                reject('їмо вчорашню страву')
            }
        },800)
    })

}

function watchTV (time){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (time < 24){
               resolve('дивимось футбол');
            }else {
                reject('потрібно дягати спати');
            }
        },2500)
    })

}

function slipe (time){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (time > 24){
                console.log('спимо');
            }else {
                console.log('можна почитати книгу')
            }
        },1000)
    })

}
getUp(true).then(getUP => {
    console.log(getUP);
    return brushTeeth(7.3);
}).then(Teeth =>{
    console.log(Teeth);
    return breakfast(7.5);
}).then(takeBreakfast =>{
    console.log(takeBreakfast);
    return job(true);
}).then(work =>{
    console.log(work);
    return shop(300);
}).then(product =>{
    console.log(product);
    return supper('yes');
}).then(sup =>{
    console.log(sup);
    return watchTV(23)
}).then(Tv =>{
    console.log(Tv);
    return slipe(23);
}).then(sofa =>{
    console.log(sofa)
})