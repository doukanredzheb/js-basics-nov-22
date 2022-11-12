function cat(input) {
    
    let freeDaysCount = Number(input[0]);

    let freeDaysGame = freeDaysCount * 127;
    let workingDays = (365 - freeDaysCount) * 63;
    let totalGame = freeDaysGame + workingDays;

    let freeTime = Math.abs(totalGame - 30000);
    let hours = freeTime / 60;
    let minutes = freeTime % 60;
    
    if (30000 >= totalGame) {
        console.log(`Tom sleeps well`)
        console.log(`${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes less for play`);
    } else {
        console.log(`Tom will run away`)
        console.log(`${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes more for play`);
    }
    
}


cat(["113"]);


