                    // a. Define Callback Functions:
function addNumbers(num1, num2){
    sum = num1 + num2
    return sum
}

function multiplyNumbers(num1, num2){
    product = num1 * num2
    return product
}

function subtractNumbers(num1, num2){
    differance =  num1 - num2
    return differance
}

function divideNumbers(num1, num2){
    differance = num1 / num2
    return differance
}





                        // b. Define performArithmetic Function:
function performAirthmatic(n1, n2, operation){
    result = operation(n1, n2)
    return result
}



                        // c. Call performArithmetic with Callback Functions:
const res1 = performAirthmatic(5, 3, addNumbers)
console.log(res1);

const res2 = performAirthmatic(5, 3, multiplyNumbers)
console.log(res2)

const res3 = performAirthmatic(5, 3, subtractNumbers)
console.log(res3);

const res4 = performAirthmatic(5, 3, divideNumbers)
console.log(res4);




