let money = 150;

function gettingUp (get){
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
        },1500)
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
                // console.log(money +'hrn')
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

function goToBed (time){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (time > 23){
                resolve('спимо');
            }else {
                reject('можна почитати книгу')
            }
        },1000)
    })

}

 async function oneDay() {
  const up = await gettingUp(true);
     console.log(up);
  const teeth = await brushTeeth(7.2);
     console.log(teeth);
  const eat = await breakfast(7.4);
     console.log(eat);
  const work = await job(true);
     console.log(work);
  const product = await shop(300);
     console.log(product);
  const sup = await supper('yes');
     console.log(sup);
  const tv = await watchTV(21);
     console.log(tv);
  const sleep = await goToBed(23.5);
     console.log(sleep);

}
oneDay()