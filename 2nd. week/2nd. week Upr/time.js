function time15(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = hours * 60 + minutes + 15;
    
    let hours1 = Math.trunc(totalTime / 60);
    let mins = totalTime % 60;

    if (hours1 >= 24) {
        hours1 -= 24;
    }

    if (mins < 10) {
        console.log(`${hours1}:0${mins}`);
    } else {
        console.log(`${hours1}:${mins}`);
    }

}

time15(["23", "45"]);