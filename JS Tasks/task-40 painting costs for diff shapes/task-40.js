                            // Define Callback Functions for Area Calculations:
function areaOfRectangle(width, height){
    area = width * height
    return area
}

function areaOfCircle(radius){
    area = 3.14 * radius**2
    return area
}

function areaOfTriangle(base, height){
    area = 0.5 * base * height
    return area
}


                            // b. Define calculatePaintingCost Function:
function calculatePrintingCost(dimension1, dimension2, calculateArea){
    shapeArea = calculateArea(dimension1, dimension2)
    costPerUnit = 2
    totalCost = shapeArea * costPerUnit
    return totalCost
}


                            // c. Call calculatePaintingCost with Different Callback Functions:
const cost1 = calculatePrintingCost(5, 10, areaOfRectangle)
console.log(cost1)

const cost2 = calculatePrintingCost(3, null, areaOfCircle)
console.log(cost2)

const cost3 = calculatePrintingCost(6, 8, areaOfTriangle)
console.log(cost3)