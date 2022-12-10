function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let text = '';


    for (let i = floors; i >= 1; i--) {
        for (let a = 0; a < rooms; a++) {
            if (i === floors) {
                text += `L${i}${a} `
            } else if (i % 2 !== 0) {
                text += `A${i}${a} `
            } else {
                text += `O${i}${a} `
            }
        }
        console.log(text);
        text = '';
    }
}

building(["6", "4"]);