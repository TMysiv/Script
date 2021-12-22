let url = new URL(location.href);
let data = url.searchParams.get('data');
let parseData = JSON.parse(data);


fetch('https://jsonplaceholder.typicode.com/posts/'+ parseData.id)
        .then(value => value.json())
        .then(posts =>{
            let divPost = document.createElement('div');
            divPost.classList.add('post');
            divPost.innerHTML = `<h3>USERid - ${posts.userId}</h3> <h3>ID - ${posts.id}</h3> <h3>TITLE - ${posts.title}</h3>
                                  <h3>BODY - ${posts.body}</h3>  `;
            let postButton = document.createElement('button');
            postButton.classList.add('postButton');
            postButton.innerText = 'Comments';
            divPost.appendChild(postButton)
            document.body.append(divPost);

            postButton.onclick = function (){
                fetch('https://jsonplaceholder.typicode.com/comments')
                        .then(value => value.json())
                        .then(comments =>{
                            let commentsWrap = document.createElement('div');
                            commentsWrap.classList.add('commentsWrap');
                            document.body.append(commentsWrap);
                            for (const com of comments) {
                                if (posts.id === com.postId){
                                    let commentDiv = document.createElement('div');
                                    commentDiv.classList.add('commentDiv');
                                    commentDiv.innerHTML = `<h4>${com.body}</h4>`
                                    commentsWrap.append(commentDiv)

                                }
                            }
                        })
                postButton.disabled = true;
            }

        })