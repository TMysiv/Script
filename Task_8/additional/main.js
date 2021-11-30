// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let array = []
function reCall(startElement){
    if (startElement.children.length ){
        for (let element of startElement.children) {
            if (element.classList.length){
                for (let key of element.classList) {
                    array.push(key)
                }
            }
            reCall(element)
        }
    }
}
reCall(document.body)