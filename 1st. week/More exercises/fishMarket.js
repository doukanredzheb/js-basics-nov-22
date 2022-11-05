function fishMarket(input){
    let mackerelPrice = Number(input[0]);//skum
    let spratPrice = Number(input[1]); //caca
    let bonitoKg = Number(input[2]);//pal
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);
    
    let bonitoPrice = mackerelPrice + mackerelPrice * 0.60;
    let bonitoTotal = bonitoKg * bonitoPrice;
    let safridPrice = spratPrice + spratPrice * 0.80;
    let safridTotal = safridKg * safridPrice;
    let midiPrice = midiKg * 7.5;
    let totalPrice = bonitoTotal + safridTotal + midiPrice;
    let total = totalPrice.toFixed(2);
    console.log(total);


}

fishMarket(["5.55", "3.57", "4.3", "3.6", "7"])