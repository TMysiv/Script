let money = 150;

function getUp (get,callback){
    setTimeout(() => {
        if (get){
            console.log('я прокинувся');
            callback();
        }else {
            console.log('хочу ще спати')
        }
    },1500)
}
function brushTeeth (time,callback){
    setTimeout(() => {
        if (time < 7.5){
            console.log('іду чистити зуби');
            callback();
        }else {
            console.log('треба бішти снідати')
        }
    },500)
}

function  breakfast (time,callback){
    setTimeout( () => {
        if (time < 8 ){
            console.log('швиденько снідаю');
            callback();
        }else {
            console.log('поїм на роботі')
        }
    }, 1000)
}

function job (doMyWork,callback){
    setTimeout(() => {
        if (doMyWork){
            money +=500;
            console.log('відпрацював день')
            callback();
        }else {
            console.log('сьогодні вихідний')
        }
    },2000)
}

function shop (check,callback){
    setTimeout(() => {
        if (money > check){
            console.log('ми скупились');
            callback();
        }else {
            console.log('сьогодні ідемо в гості))')
        }
    },1300 )
}

function supper(food,callback){
    setTimeout(() => {
        if (food === 'yes'){
            console.log('готуэмо вечерю');
            callback();
        }else {
            console.log('їмо вчорашню страву')
        }
    },800)
}

function watchTV (time,callback){
    setTimeout( () => {
        if (time < 24){
            console.log('дивимось футбол');
            callback()
        }else {
            console.log('потрібно дягати спати');
        }
    },2500)
}

function slipe (time){
    setTimeout( () => {
        if (time > 23){
            console.log('спимо');

        }else {
            console.log('можна почитати книгу')
        }
    },1000)
}

getUp(true,() =>{
    brushTeeth(7.3, () =>{
        breakfast(7.5, () =>{
            job(true, () => {
                shop(300, () =>{
                    supper('yes', () => {
                        watchTV(21, () => {
                            slipe(23)
                        })
                    })
                })
            })
        })
    })
})


