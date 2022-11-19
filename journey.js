function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = 0;
    let place = 0;
    let vacationPrice = 0;

    if (season === "summer") {
        if (budget <= 100) {
            destination = "Bulgaria";
            vacationPrice = budget * 0.3;
            place = "Camp";
        } else if (budget <= 1000) {
            destination = "Balkans";
            vacationPrice = budget * 0.4;
            place = "Camp";
        } else if (budget > 1000) {
            destination = "Europe";
            vacationPrice = budget * 0.9;
            place = "Hotel";
        }
    }
    if (season === "winter") {
        if (budget <= 100) {
            destination = "Bulgaria";
            vacationPrice = budget * 0.7;
            place = "Hotel";
        } else if (budget <= 1000) {
            destination = "Balkans";
            vacationPrice = budget * 0.8;
            place = "Hotel";
        } else if (budget > 1000) {
            destination = "Europe";
            vacationPrice = budget * 0.9;
            place = "Hotel";
        }
    } console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${vacationPrice.toFixed(2)}`);
}

journey([678.53, "winter"]);