function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statis = Number(input[1]);
    let statisClothes = Number(input[2]);

    let decor = budget * 0.1;
    let clothesPrice = statis * statisClothes;
    
    if (statis >= 150) {
        clothesPrice = clothesPrice * 0.9;
    } 

    let moneyForThings = decor + clothesPrice;

    if (moneyForThings > budget) {
        
        console.log(`Not enough money! 
Wingard needs ${(moneyForThings - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action! 
Wingard starts filming with ${(budget - moneyForThings).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["15437.62", "186", "57.99"]);