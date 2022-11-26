function salary(input) {

    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= tabs + 1; i++) {
        let sites = input[i];

        if (sites === "Facebook") {
            salary -= 150;
        } if (sites === "Instagram") {
            salary -= 100;
        } if (sites === "Reddit") {
            salary -= 50
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            return;
        }
    }
    if (salary != 0) {
        console.log(`${salary}`);
    }
}

salary(["3","500","Facebook","Stackoverflow.com","softuni.bg"]);
