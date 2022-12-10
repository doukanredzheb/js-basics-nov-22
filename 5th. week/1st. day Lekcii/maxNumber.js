function maxNum(input) {

    let a = input[0];
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER;

    while (a !== "Stop") {
        let num = Number(a);
        if (num > max) {
            max = num;
        }
        a = input[index];
        index++
    }
    console.log(max);
}

maxNum((["100",
    "99",
    "80",
    "70",
    "Stop"])
);