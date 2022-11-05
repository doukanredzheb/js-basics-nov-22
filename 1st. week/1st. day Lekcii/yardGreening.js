function yardGreening(input){
    let quadMeters = Number(input[0]);
    let price = parseFloat(quadMeters * 7.61);
    let discount = parseFloat(price * 0.18);
    let finalPrice = parseFloat(price - discount);
    console.log(`The final price is: ${finalPrice} lv.`)
console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["150"])