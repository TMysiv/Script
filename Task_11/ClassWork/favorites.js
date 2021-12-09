let str = localStorage.getItem('userAdd');
let parse = JSON.parse(str);
for (let parseElement of parse) {
    let div = document.createElement('div');
    div.innerText = `${parseElement.name},${parseElement.age},${parseElement.status}`;
    div.style.border = '1px solid black'
    document.body.append(div)
}