let shop = JSON.parse(localStorage.getItem('shopProduct'));

let wrap = document.createElement('div');
wrap.classList.add('wrap')
document.body.append(wrap)
for (const element of shop) {
    let box = document.createElement('div');
    box.classList.add('box');
    let h2 = document.createElement('h2');
    h2.innerText = `${element.name}`;
    let h3 = document.createElement('h3');
    h3.innerText = `залишилось ${element.number}`;
    h3.style.color = 'blue'
    let h1 = document.createElement('h1');
    h1.innerText = `ціна ${element.price}`;
    h1.style.color ='red'
    let img = document.createElement('img');
    img.src = element.image;
    let btn = document.createElement('button');
    btn.innerText = 'Delete';

    btn.onclick = function (){
        let index = shop.indexOf(element);
        shop.splice(index,1);
        localStorage.setItem('shopProduct',JSON.stringify(shop));
        box.remove()

    }

    wrap.append(box);
    box.append(h2,h3,h1,img,btn)
}

let button = document.createElement('button');
button.classList.add('button')
button.innerText = 'Delete ALL';
document.body.append(button);

button.onclick = function (){
     // localStorage.clear()
}