function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let totalTime = timeFirst + timeSecond + timeThird;
    let mins = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
    console.log(`${mins}:0${seconds}`);
    } else {
    console.log(`${mins}:${seconds}`)
    }
    
}

sumSeconds([]);