function skiTrip(input) {

    let days = Number(input[0]);
    let place = input[1];
    let rating = input[2];

    let nights = days - 1;
    let discount = 0;
    let priceWithDiscount = 0;
    let totalPrice =0;

    if (place === "room for one person") {
        priceWithDiscount = nights * 18;
    } else if (place === "apartment") {
        if (days < 10) {
            discount = 0.30;
            priceWithDiscount = nights * 25 * (1 - discount);
        } else if (days >= 10 && days <= 15) {
            discount = 0.35;
            priceWithDiscount = nights * 25 * (1 - discount);
        } else if (days > 15) {
            discount = 0.50;
            priceWithDiscount = nights * 25 * (1 - discount);
        }
    } else if (place === "president apartment") {
        if (days < 10) {
            discount = 0.10;
            priceWithDiscount = nights * 35 * (1 - discount);
        } else if (days >= 10 && days <= 15) {
            discount = 0.15;
            priceWithDiscount = nights * 35 * (1 - discount);
        } else if (days > 15) {
            discount = 0.2;
            priceWithDiscount = nights * 35 * (1 - discount);
        }
    }

    if (rating === "positive") {
        totalPrice = priceWithDiscount * (1 + 0.25);
    } else if (rating === "negative") {
        totalPrice = priceWithDiscount * (1 - 0.10);
    }
    console.log(totalPrice.toFixed(2));
 }


skiTrip([2, "apartment", "positive"]);