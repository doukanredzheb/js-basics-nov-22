function multiplication(input) {

    let number = Number(input[0]);
    let total = 0;

    for (let i = 1; i <= 10; i++) {
        total = i * number;
        console.log(`${i} * ${number} = ${total}`);
    }
}

multiplication(["5"]);