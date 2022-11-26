function divisibleNumbers(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let sum = 0;
    let outputNumber = '';

    for (let i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            outputNumber = outputNumber + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumber);
}

divisibleNumbers([100, 200]);