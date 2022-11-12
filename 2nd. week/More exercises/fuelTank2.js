function fuelTank(input) {
    let fuelType = input[0];
    let fuelamount = Number(input[1]);
    let discountCard = input[2];
   
    let Gasoline = 2.22;
    let Diesel = 2.33;
    let Gas = 0.93;
   
    let fuelPrice = 0;
   
    // Checking for Card discount.
   
    // Yes - with discount
    if (discountCard === "Yes") {
      if (fuelType === "Gasoline") {
        fuelPrice = fuelamount * (Gasoline - 0.18);
      } else if (fuelType === "Diesel") {
        fuelPrice = fuelamount * (Diesel - 0.12);
      } else {
        fuelPrice = fuelamount * (Gas - 0.08);
      }
    } else {
      // No - without discount
      if (fuelType === "Gasoline") {
        fuelPrice = fuelamount * Gasoline;
      } else if (fuelType === "Diesel") {
        fuelPrice = fuelamount * Diesel;
      } else {
        fuelPrice = fuelamount * Gas;
      }
    }
   
    // Checking for Amount discount.
    if (fuelamount >= 20 && fuelamount <= 25) {
      // Checking for 8% discount
      fuelPrice = fuelPrice * 0.92;
    } else if (fuelamount > 25) {
      // Checking for 10% discount
      fuelPrice = fuelPrice * 0.9;
    }
   
    console.log(`${fuelPrice.toFixed(2)} lv.`);
  }

fuelTank(["Gas", "30", "Yes"]);