function tennisRanklist(input) {

    let tournamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let wins = 0;
    let totalPoints = startingPoints;

    for (i = 2; i < input.length; i++) {
        if (input[i] === "W") {
            totalPoints += 2000;
            wins++;
        } else if (input[i] === "F") {
            totalPoints += 1200
        } else {
            totalPoints += 720;
        }
    }
    let avaragePoints = (totalPoints - startingPoints) / tournamentCount;
    let persentOfWinnings = (wins / tournamentCount) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avaragePoints)}`);
    console.log(`${persentOfWinnings.toFixed(2)}%`);
}

tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"]);

