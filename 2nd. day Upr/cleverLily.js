function lily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneyForBirthday = 0;
    let evenBirthdayMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyForBirthday = moneyForBirthday + (evenBirthdayMoney - 1);
            evenBirthdayMoney = evenBirthdayMoney + 10;
        } else {
            moneyForBirthday = moneyForBirthday + toyPrice;
        }
    }

    if (moneyForBirthday >= washingMachinePrice) {
        let moneyLeft = moneyForBirthday - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washingMachinePrice - moneyForBirthday;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

lily(["10", "170.00", "6"]);