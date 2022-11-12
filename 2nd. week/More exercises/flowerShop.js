function flowerShop(input) {

    let magnolia = Number(input[0]);
    let zymbyul = Number(input[1]);
    let rose = Number(input[2]);
    let cactus = Number(input[3]);
    let presentPrice = Number(input[4]);

    let magnoliaPrice = magnolia * 3.25;
    let zymbyulPrice = zymbyul * 4;
    let rosePrice = rose * 3.5;
    let cactusPrice = cactus * 8;

    let totalPrice = magnoliaPrice + zymbyulPrice + rosePrice + cactusPrice;
    let tax = totalPrice * 0.05;
    let totalPriceAfterTaxes = totalPrice - tax;

    if (presentPrice <= totalPriceAfterTaxes) {
        console.log(`She is left with ${Math.floor(totalPriceAfterTaxes - presentPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(presentPrice - totalPriceAfterTaxes)} leva.`);
    }
}

flowerShop(["15", "7", "5", "10", "100"]);