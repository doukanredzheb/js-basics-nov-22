function fuelTank(input) {
   
    let fuelType = input[0];
    let fuelLiters = Number(input[1]);
    
    if (fuelType === "Gas") {
        if (fuelLiters >= 25) {
            console.log(`You have enough gas.`);
        } else {
            console.log(`Fill your tank with gas!`);
        }
    } else if (fuelType == "Gasoline") {
            if (fuelLiters >= 25) {
                console.log(`You have enough gasoline.`);
            } else {
                console.log(`Fill your tank with gasoline!`);
            }
    } else if (fuelType === "Diesel") {
        if (fuelLiters >= 25) {
            console.log(`You have enough diesel.`);
        } else {
            console.log(`Fill your tank with diesel!`);
        }
    } else {
        console.log(`Invalid fuel!`);
    }
}

fuelTank(["gasoline", "40"]);