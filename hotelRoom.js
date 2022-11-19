function hotelRoom(input) {

    let month = input[0];
    let days = input[1];

    let Apartment;
    let Studio;

    switch (month) {
        case "May":
        case "Octomber":
            Studio = 50;
            Apartment = 65;
            
            if (days > 14) {
                Studio = Studio * 0.70;
                Apartment = Apartment * 0.9;
            }
            else if (days > 7) {
                Studio = Studio * 0.95;
            } 
            break;
            case "June":
            case "September":
                Studio = 75.20;
                Apartment = 68.70;
                if (days > 14) {
                    Studio = Studio * 0.80;
                    Apartment = Apartment * 0.90;
                }
            break;
            case "July":
            case "August":
                Studio = 76;
                Apartment = 77;
                if (days > 14) {
                    Apartment = Apartment * 0.90;
                }
                break;
    }
    let sumA = (days * Apartment);
    let sumB = (days * Studio);

    console.log(`Apartment: ${sumA.toFixed(2)} lv.`);
    console.log(`Studio: ${sumB.toFixed(2)} lv.`);
}
           


hotelRoom(["June", "14"]);