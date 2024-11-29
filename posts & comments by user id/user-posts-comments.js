const button = document.querySelector('button');
let postsDiv = document.querySelector('#posts');


button.addEventListener('click', (event) =>{
    let inputUserId = document.querySelector('input').value;
    console.log(inputUserId);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${inputUserId}`) 
    .then(response => response.json())
    .then(data => {
        for (const post of data) {
            let p = document.createElement('p');
            post.innerText = post.title;
            postsDiv.append(post);
            // postsDiv += post;
        }
        
    })
    .catch(err => console.log('Error: ', err));
})