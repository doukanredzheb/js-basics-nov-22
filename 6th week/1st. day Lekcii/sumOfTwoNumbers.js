function sum(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isMagicNumber = false;

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            counter++
            if (i + j === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                isMagicNumber = true;
                break;
            }
        }
        if (isMagicNumber) {
            break;
        }
    }
    if (isMagicNumber === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sum(["1",
    "10",
    "5"])
    ;