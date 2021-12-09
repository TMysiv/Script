// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage


// let form = document.createElement('form');
// let inputName = document.createElement('input');
// let inputAge = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'SEND'
//
// document.body.append(form,button);
// form.append(inputName,inputAge)
//
// button.onclick = function (){
//     let user = {name : inputName.value , age: inputAge.value};
//     localStorage.setItem('user', JSON.stringify(user) )
// }



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

// let form = document.createElement('form');
// let model = document.createElement('input');
// let label1 = document.createElement('label');
// label1.innerText = 'model'
// let label2 = document.createElement('label');
// label2.innerText = 'type'
// let label3 = document.createElement('label');
// label3.innerText = 'volume'
// let type = document.createElement('input');
// let volume = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'SAVE'
//
// form.append(label1,model,label2,type,label3,volume);
// document.body.append(form,button);
//
// localStorage.setItem('car',JSON.stringify([]));
//
//
// let carFunctions = (modelofCar,typeofCar,volumeofCar) =>{
//     let parse = JSON.parse(localStorage.getItem('car'));
//     parse.push({modelofCar,typeofCar,volumeofCar});
//     localStorage.setItem('car',JSON.stringify(parse))
// }
//
// button.onclick = function (){
//     carFunctions(model.value,type.value,volume.value)
// }




