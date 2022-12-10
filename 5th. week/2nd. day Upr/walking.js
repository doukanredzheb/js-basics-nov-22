function walking(input) {

    let index = 0;

    let currentSteps = input[index];
    index++;

    let totalSteps = 0;

    while (currentSteps !== "Going home") {
        currentSteps = Number(currentSteps);
        totalSteps += currentSteps;

        if (totalSteps >= 10000) {
            let stepsAboveGoal = totalSteps - 10000;
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsAboveGoal} steps over the goal!`);
            return;
        }

        currentSteps = input[index];
        index++;
    }

    let stepsGoingHome = Number(input[index]);
    index++;

    totalSteps += stepsGoingHome;

    if (totalSteps >= 10000) {
        let stepsAboveGoal = totalSteps - 10000;
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsAboveGoal} steps over the goal!`);

    } else {
        let stepsBelowGoal = 10000 - totalSteps;
        console.log(`${stepsBelowGoal} more steps to reach goal.`);
    }
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])

