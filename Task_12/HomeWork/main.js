// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(posts =>{
    //         let wrap = document.createElement('div');
    //         wrap.classList.add('wrap');
    //         document.body.append(wrap);
    //
    //         for (const key of posts) {
    //         let div = document.createElement('div');
    //         div.classList.add('wrap_box');
    //
    //         let divUser = document.createElement('div');
    //         divUser.innerText =`userId - ${key.userId}`;
    //         divUser.style.background = 'yellow';
    //
    //         let divID = document.createElement('div');
    //         divID.innerText =`id - ${key.id}`;
    //         divID.style.background = 'green';
    //
    //         let divTitle = document.createElement('div');
    //         divTitle.innerText =`title - ${key.title}`;
    //         divTitle.style.background = 'pink';
    //
    //         let divBody = document.createElement('div');
    //         divBody.innerText =` body - ${key.body}`;
    //         divBody.style.background = 'orange';
    //
    //         wrap.append(div)
    //         div.append(divUser,divID,divTitle,divBody)
    //         }
    //
    //     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(comments =>{
                let wrap = document.createElement('div');
                wrap.classList.add('wrapper');
                document.body.append(wrap);
                for (const comment of comments) {
                        let div = document.createElement('div');
                        div.classList.add('wrapper_box');
                        div.innerHTML = `<h2>postID  ${comment.postId}</h2> <h2>ID  ${comment.id}</h2 <h3>name  ${comment.name}</h3
                                         <h3>email  ${comment.email}</h3>  <h3>body  ${comment.body}</h3>   `
                        wrap.append(div)
                }
})