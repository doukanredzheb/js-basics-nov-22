function animalType(input) {

    let name = input[0];

    switch (name) {
        case "dog":
            console.log("mammal"); break;
        case "snake":
        case "tortoise":
        case "crocodile": 
            console.log("reptile"); break;
        default:
            console.log("unknown"); break;
    }
}

animalType(["crocodile"]);