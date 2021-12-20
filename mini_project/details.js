let url = new URL(location.href);
let data = url.searchParams.get('data');
let parseData = JSON.parse(data);

fetch('https://jsonplaceholder.typicode.com/users/' + parseData.id)
        .then(value => value.json())
        .then(user => {
                let userBox = document.createElement('div');
                userBox.classList.add('userBox');

                let divUser = document.createElement('div');
                let ul = document.createElement('ul');

                let button = document.createElement('button');
                button.classList.add('button');
                button.innerText= 'Post of current user'

                divUser.append(ul)
                userBox.append(divUser,button);
                document.body.append(userBox);
            for (const key in user) {

                let liUser = document.createElement('li');
                liUser.innerText = `${key} - ${user[key]}`;
                liUser.classList.add('liUser');
                ul.append(liUser)

                if (key === 'address'){
                    liUser.innerText = 'address : ';
                    let ulAddress = document.createElement('ul');
                    liUser.append(ulAddress)
                    for (const address in user.address) {
                        let liAddress = document.createElement('li');
                        liAddress.innerText = `${address} - ${user.address[address]}`;
                        liAddress.classList.add('liAddress');
                        ulAddress.append(liAddress);


                        if (address === 'geo'){
                            liAddress.innerText = 'geo : '
                            let ulGeo = document.createElement('ul');
                            liAddress.append(ulGeo)
                            for (const geo in user.address.geo) {
                                let liGeo = document.createElement('li');
                                liGeo.innerText = `${geo} - ${user.address.geo[geo]}`
                                liGeo.classList.add('liGeo');
                                ulGeo.append(liGeo)
                            }
                        }
                    }
                }
                if (key === 'company'){
                    liUser.innerText = 'company : '
                    let ulCompany = document.createElement('ul');
                    liUser.append(ulCompany);
                    for (let company in user.company) {
                        let liCompany = document.createElement('li');
                        liCompany.innerText = `${company} - ${user.company[company]}`
                        liCompany.classList.add('liAddress');
                        ulCompany.append(liCompany)
                    }
                }

            }

            button.onclick = function (){
                fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(value => value.json())
                        .then(posts =>{
                            let postWrap = document.createElement('div');
                            postWrap.classList.add('postWrap')
                            document.body.append(postWrap);
                            for (const post of posts) {
                                if (user.id === post.userId){
                                    let divPost = document.createElement('div');
                                    divPost.innerText = post.title;
                                    divPost.classList.add('divPost');
                                    postWrap.append(divPost);

                                    let link = document.createElement('a');
                                    link.classList.add('linkPost');
                                    link.href = 'user-details.html?data=' + JSON.stringify(post);
                                    link.innerText = 'Details';
                                    divPost.append(link)



                                }
                            }
                        })
                button.disabled = true;
            }


        })