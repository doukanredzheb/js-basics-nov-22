function celToFar(input){
let cel = Number(input[0]);
let far = cel * 1.8 + 32;
let n = far.toFixed(2);
console.log(n);
}

celToFar(["32.3"])