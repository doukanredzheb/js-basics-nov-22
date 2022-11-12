function transportPrice(input) {
    let km = Number(input[0])
    let trip = input[1]
 
    let taxiInitialTax = 0.70
    let taxiDayTariff = 0.79;
    let taxiNightTariff = 0.90;
    let bus = 0.09;
    let train = 0.06;
    let price = 0;
 
    if (trip == "day" && km < 20) {
        price = (km * taxiDayTariff) + taxiInitialTax
    }
    else if (km < 20) {
        price = (km * taxiNightTariff) + taxiInitialTax;
    }
    else if (km >= 100) {
        price = (km * train);
    }
    else if (km >= 20) {
        price = km * bus;
    }
 
    console.log(price.toFixed(2));
}

transportPrice(["180", "night"]);