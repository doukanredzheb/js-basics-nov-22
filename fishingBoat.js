function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherManCount = Number(input[2]);
    let rent = 0;

    switch(season) {
        case "Spring":
            rent = 3000;
        break;

        case "Summer":
        case "Autumn":
            rent = 4200;
        break;

        case "Winter":
            rent = 2600;
        break;
    }
    if (fisherManCount <= 6) {
       rent = rent * 0.9
    } else if (fisherManCount <= 11) {
       rent = rent * 0.85;
    } else {
        rent = rent * 0.75;
    }
    if (fisherManCount % 2 === 0 && season !== "Autumn") {
        rent = 0.95 * rent
    } if (budget > rent) {
        let moneyLeft = budget - rent;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = rent - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

fishingBoat([3600, "Autumn", 6]);