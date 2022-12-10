function examPreparation(input) {

    let index = 0;

    let maxPoorGrades = Number(input[index]);
    index++;

    let taskName = input[index];
    index++

    let taskGrade = Number(input[index]);
    index++;

    let badGrades = 0;
    let gradesSum = 0;
    let gradesCount = 0;
    let lastProblem = 0;

    while (taskName !== "Enough") {
        lastProblem = taskName;
        if (taskGrade <= 4) {
            badGrades++;
        }
        if (badGrades === maxPoorGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            return;
        }
        gradesSum += taskGrade;

        gradesCount++;

        taskName = input[index];
        index++;

        taskGrade = Number(input[index]);
        index++;

    }
    let avgGrade = gradesSum / gradesCount;

    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastProblem}`);


}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);
