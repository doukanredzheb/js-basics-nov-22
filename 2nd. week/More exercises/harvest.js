function loze(input) {

    let xQuadMeters = Number(input[0]);
    let yGrapeQuadMeters = Number(input[1]);
    let zLitersWine = Number(input[2]);
    let workersCount = Number(input[3]);

    let grapeTotal = xQuadMeters * yGrapeQuadMeters;
    let wine = (grapeTotal / 2.5) * 0.4;

    if (wine >= zLitersWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        let wineOst = Math.ceil(wine - zLitersWine);
        let winePerPerson = Math.ceil(wineOst / workersCount);
        console.log(`${wineOst} liters left -> ${winePerPerson} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(zLitersWine - wine)} liters wine needed.`);
    }
}

loze(["1020", "1.5", "425", "4"]);