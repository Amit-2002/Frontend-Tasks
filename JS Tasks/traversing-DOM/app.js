// let first_ul = document.querySelector('.list1');
// // console.log(first_ul);

// let first_ul_children = first_ul.childNodes;
// // console.log(first_ul_children);

// Array.from(first_ul_children).forEach(function(child){
//     console.log(child.textContent);
// })

let first_ul = document.getElementById('list1');
console.log(first_ul);

let currentChild = first_ul.firstElementChild;
console.log(currentChild);
while(currentChild != null){
    console.log(currentChild.textContent);
    currentChild = currentChild.nextElementSibling;
}


let second_ul = document.getElementById('list2');
console.log(second_ul);

let second_ul_lastChild = second_ul.lastElementChild;
console.log(second_ul_lastChild);

let currentEle = second_ul_lastChild;
while(currentEle != null){
    console.log(currentEle.textContent);
    currentEle = currentEle.previousElementSibling; 
}


let third_ul = document.getElementById('list3');
console.log(third_ul);

let allChildren = third_ul.children;
console.log(allChildren);

// i=0;
// while(i<allChildren.length){
//     console.log(allChildren[i].textContent);
//     i++;
// }

for(child of allChildren){
    console.log(child.textContent)
}


