function sumOfNumbers(input) {

    let n = input[0];
    let str = n + "";
    let sum = 0;
    for (let i =0; i < str.length; i++) {
        sum = sum + Number(str[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);