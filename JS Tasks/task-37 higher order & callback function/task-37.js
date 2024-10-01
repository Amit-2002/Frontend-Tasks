                    // a. Define Higher Order Function:

// function higherOrderFunction(num, callback){
//     return callback(num);
// }


//                         // b. define Callback Function and Call Higher Order Function:
// function callbackFunction(number){
//     console.log(number)
// }

// higherOrderFunction(5, callbackFunction) // calling higher order function and passing callback function as an argument to it.




                    // c. Call Higher Order Function with a Function Expression as Callback:
// function higherOrderFunction(num, callback){
//     return callback(num);
// }

// const callbackFunctionExpression = function(number){
//     console.log(number);
// }

// higherOrderFunction(10, callbackFunctionExpression);




                    // d. Callback to Log Square of the Number:
// function higherOrderFunction(num, callback){
//     return callback(num);
// }

// callbackFunctionExpression = function(number){
//     square = number ** 2
//     console.log(square)
// }

// higherOrderFunction(4, callbackFunctionExpression);





                    // Callback to Log Sum of Two Numbers:
// function higherOrderFunction(num1, num2, callback){
//     return callback(num1, num2);
// }

// const callbackFunctionExpression = function(num1, num2){
//     sum = num1 + num2;
//     console.log(sum);
// }

// higherOrderFunction(3, 4, callbackFunctionExpression)