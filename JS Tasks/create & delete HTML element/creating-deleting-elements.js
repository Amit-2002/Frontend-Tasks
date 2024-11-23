let itemNumber = 1;
function addListItem(){
    let item = document.createElement('li');
    item.textContent = `New Item ${itemNumber}`;
    document.querySelector('#list').append(item);
}

let addButton = document.querySelector('#addButton');
addButton.addEventListener('click', () => {
        addListItem();
        itemNumber += 1;
});


function removeLastListItem(){
    let ulList = document.getElementById('list');
    if (ulList.lastElementChild != null){
        ulList.lastElementChild.remove();
    } 
}
let removeButton = document.querySelector('#removeButton');
removeButton.addEventListener('click', ()=>{
    removeLastListItem();
})