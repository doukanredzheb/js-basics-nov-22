function vegMarket(input){
    let vegPrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let totalVegWeight = Number(input[2]);
    let totalFruitWeight = Number(input[3]);
    let totalVegPrice = vegPrice * totalVegWeight;
    let totalFruitPrice = fruitPrice * totalFruitWeight;
    let totalInBgn = totalVegPrice + totalFruitPrice;
    let totalInEur = totalInBgn / 1.94;
    let n = totalInEur.toFixed(2);
    console.log(n);

}

vegMarket(["1.5", "2.5", "10", "10"])