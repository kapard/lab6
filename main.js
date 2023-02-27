//The 2nd Problem
function perimeterRectangle(a, b) {
    let perimeter = 2 * (a + b);
    return perimeter;
}
let a = 5;
let b = 10;
console.log("Perimeter = " + perimeterRectangle(a, b));



//The 11th Problem
const number = prompt("Enter any number: ");
if(number % 2 == 0) {
    console.log("The entered number is even");
}
else {
    console.log("The entered number is odd");
}


//The 3rd Problem
let PI = 3.14;
 function findArea(r) {
    return (PI * r * r);
    }
 
    let r, Area;
    r = 7;

    Area = findArea(r);
    console.log("Area of the circle equals: " + Area);