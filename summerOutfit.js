function outfit(input) {

    let degrees = Number(input[0]);
    let timeInEvening = input[1];

    let outfit;
    let shoes;


    if(degrees >= 10 && degrees <=18) {
        if (timeInEvening === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
    } else if (timeInEvening === "Afternoon" || timeInEvening === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
    } 
} 
if (degrees > 18 && degrees <= 24) {
        if (timeInEvening === "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
    } else if (timeInEvening === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals"; 
    } else if (timeInEvening === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins"; 
        }
    }
     if (degrees >= 25) {
        if (timeInEvening === "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeInEvening === "Afternoon") { 
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (timeInEvening === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } 
    }   
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

outfit([28, "Evening"]);