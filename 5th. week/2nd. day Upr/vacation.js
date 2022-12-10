function vacation(input) {

    let index = 0;

    let moneyNeeded = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;

    let action = input[index];
    index++;

    let sum = Number(input[index]);
    index++;

    let daySpentCount = 0;
    let daysPassed = 0;

    while (moneyAvailable < moneyNeeded) {
        daysPassed++;
        if (action === "spend") {
            if (sum > moneyAvailable) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= sum;
            }
            daySpentCount++;
        } else {
            moneyAvailable += sum;
            daySpentCount = 0;
        }

        if (daySpentCount === 5) {
            console.log(`You can't save the money.`);
            console.log(daysPassed);
            return;
        }
        action = input[index];
        index++;
        sum = Number(input[index]);
        index++
    }
    console.log(`You saved the money for ${daysPassed} days.`);
}


vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);



