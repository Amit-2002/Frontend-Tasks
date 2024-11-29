fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    let postDiv = document.querySelector('#posts');
    for (const post of data){  
        // let h3Title = document.createElement('h3');
        // h3Title.style.backgroundColor = 'gray';
        // h3Title.style.color = 'green';
        // h3Title.style.cssText = 'background-color:gray; color: green'
        // h3Title.style.cssText = 'background-color: gray'
        // h3Title.style.cssText = 'color: green'
        // h3Title.innerText = `"Title": ${element.title}`
        // let pPost = document.createElement('p');
        // pPost.innerText = element.body;
        // postDiv.append(h3Title, pPost)

        let userId = document.createElement('p');
        userId.innerText = `"userId": ${post.userId}`;

        let id = document.createElement('p');
        id.innerText = `"id": ${post.id}`;

        let title = document.createElement('p');
        title.innerText = `"title": ${post.title}`;

        let body = document.createElement('p');
        body.innerHTML = `"body": ${post.body} <hr>`;

        postDiv.append(userId, id, title, body);
    }
    // console.log(data);
})
.catch(err => console.log('something is wrong, getting error', err))