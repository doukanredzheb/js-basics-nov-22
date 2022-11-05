function fishTank(input){
let lenght = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percent = Number(input[3]);
let capacity = lenght * width * height;
let capacityInLiters = capacity*0.001;
let litersNeeded = (capacityInLiters*(1 - percent/100))
console.log(litersNeeded);
}

fishTank(["105", "77", "89", "18.5"])