const formEl = document.querySelector('form');
// console.log(formEl);
formEl.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Form Submitted');
})

const div = document.getElementsByTagName('div');
// console.log(div);

for(let d of div){
    let toggleState = 'white';
    d.addEventListener('click', (event)=>{
        if(toggleState === 'white'){
            d.style.backgroundColor = 'red';
            toggleState = 'red';
        }else{
            d.style.backgroundColor = 'white';
            toggleState = 'white'   ;
        }
    })
}




let changebleDiv = document.querySelector('div:nth-child(5)')
// console.log(changebleDiv);

let buttons = document.querySelectorAll('button');
// let buttonsArr = Array.from(buttons);

buttons.forEach(function(btn){
    btn.addEventListener('click', (event)=>{
        let btnColor = btn.style.backgroundColor;
        changebleDiv.style.backgroundColor = btnColor;
    })
})








