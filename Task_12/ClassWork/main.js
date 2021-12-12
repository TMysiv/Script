// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(posts =>{
            let wrap = document.createElement('div');
            wrap.classList.add('wrap');
            document.body.append(wrap)

            for (const post of posts) {
                let div = document.createElement('div');
                div.classList.add('wrap_box');
                div.innerHTML = `<h2>userId  ${post.userId}</h2> <h2>ID  ${post.id}</h2 <h2>title  ${post.title}</h2>
                                          <h3>body  ${post.body}</h3>` ;
                let button = document.createElement('button');
                button.innerText = 'ДОДАТКОВО';
                button.style.width = '100px'

                wrap.append(div);
                div.append(button)

                button.onclick = function (){
                    fetch('https://jsonplaceholder.typicode.com/comments')
                            .then(value => value.json())
                            .then(comments =>{
                                let mainDiv = document.createElement('div');
                                mainDiv.classList.toggle('main');

                                for (const comment of comments) {
                                    if (post.id === comment.postId){
                                        let divComment = document.createElement('div');
                                        divComment.classList.add('comments');
                                        divComment.innerHTML = `<h3> ${comment.email}</h3><h3> ${comment.body}</h3>`;
                                        mainDiv.append(divComment)
                                        div.append(mainDiv)
                                    }
                                    button.disabled = true;
                                }
                            })



                }

            }
        })