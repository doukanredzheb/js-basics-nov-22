function triangleArea(input){
let a = Number(input[0]);
let h = Number(input[1]);
let Area = a * h/2;
let n = Area.toFixed(2);
console.log(n);
}

triangleArea(["1.23456", "4.56789"])