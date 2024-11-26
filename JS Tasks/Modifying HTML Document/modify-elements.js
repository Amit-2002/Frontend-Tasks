let button = document.querySelector('button');
button.addEventListener('click', (e) =>{
    let pText = document.querySelector('p');
    pText.textContent = "Text has been changed!";
})

let divEle = document.querySelector('div');
divEle.addEventListener('mouseover', (e) => {
    divEle.style.backgroundColor = 'yellow';
    divEle.style.color = 'blue';
})


let secondBtn = document.querySelector('.secondBtn');
secondBtn.addEventListener('click', (event) =>{
    let htmlContentDiv = document.querySelector('#htmlContent');
    let h1 = document.createElement("h1")
    h1.textContent = "Hello"
    htmlContentDiv.appendChild(h1)
})


let toggleP = document.querySelector('p~p');
let toggleBtn = document.querySelector('#toggleBtn');
let toggle = true;
toggleBtn.addEventListener('click', (event) =>{
    if (toggle){
        toggleP.style.display = 'none';
        toggle = false;
    }else{
        toggleP.style.display = 'block';
        toggle = true;
    }
})