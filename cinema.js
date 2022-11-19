function cinema(input) {

    let projectionType = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0;

    if (projectionType === "Premiere") {
        income = r * c * 12;
    } else if (projectionType === "Normal") {
        income = r * c * 7.5;
    } else if (projectionType === "Discount") {
        income = r * c *5;
    }
        console.log(`${income.toFixed(2)} leva`);
}

cinema(["Discount", 12, 30]);