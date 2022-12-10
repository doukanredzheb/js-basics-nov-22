function primeNonPrime(input) {

    let sumAllPrime = 0;
    let sumAllNonPrime = 0;

    let index = 0;
    let numbers = input[index];
    index++;

    while (numbers !== "stop") {
        let currentNum = Number(numbers);

        if (currentNum < 0) {
            console.log(`Number is negative.`);

            numbers = input[index];
            index++;

            continue;
        }

        let isPrime = true;

        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            sumAllPrime += currentNum;
        } else {
            sumAllNonPrime += currentNum;
        }
        numbers = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumAllPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumAllNonPrime}`);
} 

    primeNonPrime(["3",
        "9",
        "0",
        "7",
        "19",
        "4",
        "stop"])
