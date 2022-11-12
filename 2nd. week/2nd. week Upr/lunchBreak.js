function lunchBreak(input) {

    let series = input[0];
    let episodeLenght = Number(input[1]);
    let breakLenght = Number(input[2]);

    let lunchTime = breakLenght * (1/8);
    let freeTime = breakLenght * (1/4);

    let busyTime = lunchTime + freeTime;
    let timeLeft = breakLenght - busyTime;

    if (timeLeft >= episodeLenght) {
        let timeAfterMovie = timeLeft - episodeLenght;
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeAfterMovie)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(episodeLenght - timeLeft)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);