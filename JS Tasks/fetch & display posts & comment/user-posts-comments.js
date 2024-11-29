// let button = document.querySelector('button');
// let postsDiv = document.querySelector('#posts');

// button.addEventListener('click', (event) =>{
//     let userInputId = document.querySelector('input').value;

//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userInputId}`)
//     .then(response => response.json())
//     .then(data =>{
//         for(post of data){
//             let titleH3 = document.createElement('h3');
//             titleH3.innerText = post.title

//             let bodyP = document.createElement('p');
//             bodyP.innerText = post.body;
            
//             postsDiv.append(titleH3, bodyP);

//             let id = post.id
//             // console.log(id.body);
//             // console.log('ID------------------------------')
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
//             .then(response => response.json())
//             .then(data => {
//                for(let comm of data){
//                 let commentP = document.createElement('p');
//                 commentP.innerText = comm.body;
//                 postsDiv.append(commentP);
//                }
//             })
//             .catch(err => console.log('error', err))   
//         }
//     })

//     .catch(err => console.log('Something is wrong:',err));
// })







// ################ using Async await



let button = document.querySelector('button');
let postsDiv = document.querySelector('#posts');

button.addEventListener('click', async(event) => {
    try{
        let userInputId = document.querySelector('input').value;
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userInputId}`)
        let data = await response.json();
        console.log(data);
        
        for(let post of data){
            let title = document.createElement('h3');
            title.innerText = `"Title: " ${post.title}`;
            // console.log(title);
            
            let postBody = document.createElement('p');
            postBody.innerText = `"Post Body: " ${post.body}`;
            // console.log(title);

            postsDiv.append(title, postBody);
            let postId = post.id;

            let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            let data = await response.json();

            for(let comm of data){
                let commentP = document.createElement('p');
                commentP.innerText = `"Comment: " ${comm.body}`;
                postsDiv.append(commentP);
            }
        }
    }
    catch(err){
        console.log('cought an error.', err)
    }
})




