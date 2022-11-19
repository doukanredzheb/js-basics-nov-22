function newHouse(input) {
    
    let flowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let total = 0;

    if (flowers === "Roses") {
        total = flowersCount * 5;
        if (flowersCount > 80)
        total = (flowersCount * 5) * 0.9;
    }  else if (flowers === "Dahlias") {
        total = flowersCount * 3.8;
        if (flowersCount > 90)
        total = (flowersCount * 3.8) * 0.85; 
    }  else if (flowers === "Tulips") {
        total = flowersCount * 2.8;
        if (flowersCount > 80)
        total = (flowersCount * 2.8) * 0.85;
    } else if (flowers === "Narcissus") {
        total = flowersCount * 3;
        if (flowersCount < 120)
        total = (flowersCount * 3) * 1.15;
    } else if (flowers === "Gladiolus") {
        total = flowersCount * 2.5;
        if (flowersCount < 80)
        total = (flowersCount * 2.5) * 1.2;
    }
    if (budget >= total) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - total).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
    }  
}

newHouse(["Roses", 55, 250]);