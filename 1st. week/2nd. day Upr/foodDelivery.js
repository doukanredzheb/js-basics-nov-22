function foodDelivery(input){
let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let vegMenu = Number(input[2]);
let totalSum = (chickenMenu*10.35) + (fishMenu*12.40) + (vegMenu*8.15);
let dessertPrice = (totalSum*(20/100));
let totalPrice = totalSum + dessertPrice + 2.5;
console.log(totalPrice);
}

foodDelivery(["9", "2", "6"])