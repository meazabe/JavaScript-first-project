//Write a function that calculates the area of a triangle

function areaOfTriangle(base,height) {
    let result = 0.5*(base*height);
    return result;
    //console.log(result);
}

let area = "Area of the triangle is " + areaOfTriangle(2,4);
console.log(area);
//areaOfTriangle(2,4); 