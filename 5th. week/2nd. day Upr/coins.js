function coins(input) {

    let change = Number(input[0]);
    let changeToCoins = Math.round(change * 100);
    let coinsUsed = 0;

    while (changeToCoins > 0) {

        if (changeToCoins >= 200) {
            changeToCoins -= 200;
            coinsUsed++;
        } else if (changeToCoins >= 100) {
            changeToCoins -= 100;
            coinsUsed++;
        } else if (changeToCoins >= 50) {
            changeToCoins -= 50;
            coinsUsed++;
        } else if (changeToCoins >= 20) {
            changeToCoins -= 20;
            coinsUsed++;
        } else if (changeToCoins >= 10) {
            changeToCoins -= 10;
            coinsUsed++;
        } else if (changeToCoins >= 5) {
            changeToCoins -= 5;
            coinsUsed++;
        } else if (changeToCoins >= 2) {
            changeToCoins -= 2;
            coinsUsed++
        } else if (changeToCoins >= 1) {
            changeToCoins -= 1;
            coinsUsed++
        }
    }
    console.log(coinsUsed);
}



coins(["0.59"]);