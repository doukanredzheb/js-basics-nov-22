function fruitOrVegetable(input) {

    let arg = input[0];

    switch(arg) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
        break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
        break;

        default:
            console.log("unknown");
        break;
        }
}

fruitOrVegetable(["water"]);