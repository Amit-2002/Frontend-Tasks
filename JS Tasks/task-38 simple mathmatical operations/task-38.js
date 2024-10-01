                        // a. Define Callback Functions:
function doubleNumber(number){
    double = number + number
    // console.log(double)
    return double
}

function squareNumber(number){
    square = number * number;
    return square
}

function increamentNumber(number){
    increament = number + 1;
    return increament;
}



                        // b. Define performOperation Function: (which is an higher order function, excepts a callback function)
function performOperation(num, operation){
    let result = operation(num);
    // console.log(result)
    return result
}



                        // c. Call performOperation with Callback Functions:
const res1 = performOperation(5, doubleNumber)
console.log(res1)

const res2 = performOperation(5, squareNumber)
console.log(res2)

const res3 = performOperation(5, increamentNumber)
console.log(res3)
