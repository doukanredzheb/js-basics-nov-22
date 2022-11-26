function backToTheFuture(input) {

    let money = Number(input[0]);
    let year = Number(input[1]);
    let age = 17;

    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            age += 1;
            money -= 12000;
        } else {
            age += 1;
            money -= 12000 + age * 50;
        }
    }
    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        let neededMoney = Math.abs(money);
        console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`);
    }
}

backToTheFuture([50000, 1802]);