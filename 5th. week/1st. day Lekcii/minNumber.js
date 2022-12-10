function minNumber(input) {

    let a = input[0];
    let index = 1;
    let min = Number.MAX_SAFE_INTEGER;

    while (a !== "Stop") {
        let num = Number(a);
        if (num < min) {
            min = num;
        }
        a = input[index];
        index++
    }
    console.log(min);

}

minNumber(["-10",
"20",
"-30",
"Stop"])
