function cinemaTickets(input) {

    let index = 0;

    let movieTitle = input[index];
    index++;

    let standartTickets = 0;
    let studentTickets = 0;
    let kidsTickets = 0;

    while (movieTitle !== 'Finish') {
        let spacesAvailable = Number(input[index]);
        index++;

        let currentTicket = input[index];
        index++;

        let spacesTaken = 0;

        while (currentTicket !== 'End') {
            if (currentTicket === 'standard') {
                standartTickets++;
            } else if (currentTicket === 'student') {
                studentTickets++;
            } else if (currentTicket === 'kid') {
                kidsTickets++;
            }

            spacesTaken++;

            if (spacesTaken === spacesAvailable) {
                break;
            }
            currentTicket = input[index];
            index++;
        }
        let percentFull = (spacesTaken / spacesAvailable) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        movieTitle = input[index];
        index++;
    }
    let totalTickets = studentTickets + standartTickets + kidsTickets;

    console.log(`Total tickets: ${totalTickets}`);

    let standardPercent = (standartTickets / totalTickets) * 100;
    let studentPercent = (studentTickets / totalTickets) * 100;
    let kidsPercent = (kidsTickets / totalTickets) * 100;

    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);

}



cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
    ;