function cake(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let index = 2;
    let command = input[index];
    let cakePieces = width * lenght;
    let pieces = 0;

    while (command !== "STOP") {
        let cakeEaten = Number(command);
        pieces += cakeEaten;

        if (cakePieces <= pieces) {
            console.log(`No more cake left! You need ${pieces - cakePieces} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "STOP") {
        console.log(`${cakePieces - pieces} pieces are left.`);
    }
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);