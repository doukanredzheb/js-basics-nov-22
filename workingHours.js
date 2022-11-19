function workingHours(input) {

    let hour = Number(input[0]);
    let dayOfWeek = input[1];

    if (hour >= 10 && hour <= 18) {
        switch (dayOfWeek) {

            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;

            case "Sunday":
    
                default:
                console.log("closed");
            break;
        }
    } else {
        console.log("closed");
    }
}

workingHours([15, "Monday"]);