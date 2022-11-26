function trekking(input) {

    let sum = 0;
    let musala = 0;
    let monbolan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let count = Number(input[i])
        sum += count;

        if (count <= 5) {
            musala += count;
        } else if (count <= 12) {
            monbolan += count;
        } else if (count <= 25) {
            kilimandjaro += count;
        } else if (count <= 40) {
            k2 += count;
        } else if (count >= 41) {
            everest += count;
        }
    }
    console.log(((musala / sum) * 100).toFixed(2) + `%`);
    console.log(((monbolan / sum) * 100).toFixed(2) + `%`);
    console.log(((kilimandjaro / sum) * 100).toFixed(2) + `%`);
    console.log(((k2 / sum) * 100).toFixed(2) + `%`);
    console.log(((everest / sum) * 100).toFixed(2) + `%`);
}

trekking((["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
);