// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users =>{
            let content = document.createElement('div');
            content.classList.add('content');
            document.body.append(content)
            for (const user of users) {
                let wrap = document.createElement('div');
                wrap.classList.add('wrap');
                wrap.innerHTML = `<h2>id -  ${user.id}</h2> <h2>name - ${user.name}</h2> <h3>username -  ${user.username}</h3> <h3>email -  ${user.email}</h3>
                                  <h4>address -  ${user.address.street}</h4> <h4>phone -  ${user.phone}</h4> <h4>website -  ${user.website}</h4>
                                   <h4>company -  ${user.company.name}</h4> `
                let button = document.createElement('button');
                button.innerText = "POST";
                button.classList.add('btn')
                wrap.append(button)
                content.append(wrap);

                button.onclick = function (){
                    fetch('https://jsonplaceholder.typicode.com/posts')
                            .then(value => value.json())
                            .then(posts =>{
                                let box = document.createElement('div');
                                box.classList.add('box');
                                for (const post of posts) {
                                    if (user.id === post.userId) {
                                        let box_post = document.createElement('div');
                                        box_post.classList.add('post')
                                        box_post.innerHTML = `<h2>Post<h2> <h3>title - ${post.title}</h3> <h3>body - ${post.body}</h3> `
                                        let btn = document.createElement('button');
                                        btn.classList.add('post_btn');
                                        btn.innerText = 'comments'
                                        wrap.append(box);
                                        box.append(box_post);
                                        box_post.append(btn)

                                        btn.onclick = function (){
                                            fetch('https://jsonplaceholder.typicode.com/comments')
                                                    .then(value => value.json())
                                                    .then(comments =>{
                                                        let box_comments = document.createElement('div');
                                                        box_comments.classList.add('box_comments');
                                                        for (const comment of comments) {
                                                            if (post.id === comment.postId){
                                                                let commentDiv = document.createElement('div');
                                                                commentDiv.classList.add('commentDiv')
                                                                commentDiv.innerHTML = `<h4>${comment.email}</h4><h4>${comment.body}</h4>`;

                                                                box_comments.append(commentDiv);
                                                                box_post.append(box_comments)

                                                            }
                                                            btn.disabled = true
                                                        }

                                                    })
                                        }

                                    }
                                    button.disabled = true

                                }
                            })
                }


            }
        })