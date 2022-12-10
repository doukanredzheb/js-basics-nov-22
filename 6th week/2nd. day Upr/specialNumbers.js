function specialNumbers(input) {

    let n = Number(input[0]);
    let result = '';

    for (let i = 1111; i <= 9999; i++) {

        let iStr = i.toString();
        let isSpecial = true;

        for (let index = 0; index < iStr.length; index++) {
            let currentDigit = Number(iStr[index]);

            if (n % currentDigit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial == true) {
            result += `${iStr} `;
        }
    }
    console.log(result);
}

specialNumbers(["3"]);