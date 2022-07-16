/*
Area of a shape
Write a function that takes a shape as a param and returns the area of the shape.
Pass shape as an object, 
e.g. {type: "rectangle", sides: { width: 5, height: 6} }

calculate area based on shape.type and shape.sides or the attribute you define.
Implement the area calculation for a triangle, circle and a square.
*/

/*
rectangle = W * H
square = S * S
circle = pi * r * r
*/



function areaCalculator (shape) {
    let area = 0;
    if (shape.type === "Triangle") {
        area = 0.5 * (shape.sides.base * shape.sides.height);
    } else if (shape.type === "Rectangle") {
        area = (shape.sides.width) * (shape.sides.height);
    } else if (shape.type === "Circle") {
        area = (shape.sides.pi) * (shape.sides.radius * shape.sides.radius);
    } else if (shape.type === "Square") {
        area = (shape.sides.side * shape.sides.side);
    }
    return area;
}       

const triangle = {type: "Triangle", sides: {base: 4, height: 6}};   
const rectangle = {type: "Rectangle", sides: {width: 5, height: 6}};
const circle = {type: "Circle", sides: {pi: 3.1415926535897931, radius: 4}};   
const square = {type: "Square", sides: {side: 6}};

console.log(areaCalculator(triangle));
console.log(areaCalculator(rectangle));
console.log(areaCalculator(circle));
console.log(areaCalculator(square));