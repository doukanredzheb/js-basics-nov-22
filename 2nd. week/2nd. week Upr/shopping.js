function shopping(input) {

    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ramMemory = Number(input[3]);

    let videoCardTotal = videoCard * 250;
    let processorTotal = videoCardTotal * 0.35;
    let ramMemoryTotal = videoCardTotal * 0.1;

    let total = videoCardTotal + (processorTotal * processor) + (ramMemoryTotal * ramMemory);
    
    if (videoCard >= processor) {
        total = total * 0.85;
    }

    if (total <= budget) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45", "3", "1", "1"]);