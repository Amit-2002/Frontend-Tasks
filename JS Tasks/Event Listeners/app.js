document.querySelector('button').addEventListener('click', function(e){
    console.log('Button click event executed');
})

document.querySelector('div').addEventListener('mouseover', e => console.log('Mouseover event on div executed'));

document.querySelector('input').addEventListener('input', () =>{
    console.log("Input event executed");
})