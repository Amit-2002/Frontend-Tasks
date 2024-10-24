            // a. Define and Log the colors Array:
const colors = ["red", "green", "blue"]
// console.log(colors);
// console.log(colors[0]);


            // b. Modify and Add color elements:
// colors[1] = "yellow";
// // console.log(colors[1]);

// colors.push('pink');
// console.log(colors[colors.length - 1]);


            // c. Iterate using Loops over the colors Array:
// for(let i=0; i<colors.length; i++){
//     console.log(colors[i]);
// }


// let i=0;
// while (i < colors.length){
//     console.log(colors[i]);
//     i+=1;
// }

// for(let color of colors){
//     console.log(color);
// }


            // d. Check Array Properties:
// console.log(typeof(colors));
// console.log(colors.length);


            // e. Array Methods:
// let size = colors.push("darkgreen");
// console.log(colors);
// console.log(size);

// let removedItem = colors.pop();
// console.log(colors);
// console.log(removedItem);

// let itemIndex = colors.indexOf('blue');
// console.log(itemIndex);


            // f. Add and Iterate Over Properties:
colors.owner = "amit";
console.log(colors);

// for (let prop in colors){
//     console.log(`${prop} : ${colors[prop]}`);   
// }

for (x of colors){
    console.log(x);
    
}