function operationBetweenNumber(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let type = 0;

    switch (operator) {
        case "+":
            result = a + b;
            if (result % 2 === 0) {
                type = "even"
            } else {
                type = "odd"
            } console.log(`${a} ${operator} ${b} = ${result} - ${type}`);
            break;
        case "-":
            result = a - b;
            if (result % 2 === 0) {
                type = "even"
            } else {
                type = "odd"
            } console.log(`${a} ${operator} ${b} = ${result} - ${type}`);
            break;
        case "*":
            result = a * b;
            if (result % 2 === 0){
                type = "even";
            } else {
                type = "odd";
            } console.log(`${a} ${operator} ${b} = ${result} - ${type}`);
            break;
        case "/":
            if (a == 0 || b == 0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
            result = a / b;
            console.log(`${a} / ${b} = ${result.toFixed(2)}`);
            }
            break;
        case "%":
            if (a == 0 || b ==0) {
                console.log(`Cannot divide ${a} by zero`);
            } else {
                result = a % b;
                console.log(`${a} % ${b} = ${result}`);
            }
            break
            default:
                break;
    }
}

operationBetweenNumber([10, 1, "-"]);