function evenOrOddPosition(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let result = '';

    for (let currentNum = a; currentNum <= b; currentNum++) {
        let currentNumStr = currentNum.toString();
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNumStr.length; j++) {
            let currentDigit = Number(currentNumStr[j]);
            let position = j + 1;
            if (position % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            result += `${currentNumStr} `;
        }
    }
    console.log(result);
}

evenOrOddPosition("299900",
    "300000");

