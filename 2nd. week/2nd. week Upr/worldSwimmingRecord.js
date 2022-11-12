function swimmingRecord(input) {

    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecons = Number(input[2]);

    let timeForSwim = distanceInMeters * timeInSecons ;
    let resistense = Math.floor(distanceInMeters/15) *12.5;
    let totalTime = timeForSwim + resistense;
    let difference = (totalTime - recordInSeconds);

    if (recordInSeconds <= totalTime) {
        console.log(`No, he failed! He was ${(difference).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}

swimmingRecord(["55555.67", "3017", "5.03"]);