function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;
    let sumGrade = 0;
    let year = 1;
    let examFailed = 0;
    while (year <= 12) {
        let currentGrade = Number(input[index]);
        index++;
        if (currentGrade < 4) {
            examFailed++;
        if (examFailed == 2) {
            excluded = true;
            break;
        }
        continue;
    }
    sumGrade = sumGrade + currentGrade;
    year++;
}
    if (examFailed !== 2) {
        let averageGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${year} grade`);
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
    ;