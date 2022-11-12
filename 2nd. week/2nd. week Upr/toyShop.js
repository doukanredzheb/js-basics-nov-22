function toyShop(input) {

    let vacationPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let fluffyBear = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlePrice = puzzle * 2.6;
    let talkingDollsPrice = talkingDolls * 3;
    let fluffyBearPrice = fluffyBear * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    
    let totalPrice = puzzlePrice + talkingDollsPrice + fluffyBearPrice + minionsPrice + trucksPrice;    
    let toyNumber = puzzle + talkingDolls + fluffyBear + minions + trucks;
     
    if (toyNumber >= 50) {
        totalPrice = totalPrice * 0.75; 
    }  

    let moneyAfterRent = totalPrice * 0.90;

    if (moneyAfterRent >= vacationPrice) {
        let moneyLeft = moneyAfterRent - vacationPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let noMoney = vacationPrice - moneyAfterRent;
        console.log(`Not enough money! ${noMoney.toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);