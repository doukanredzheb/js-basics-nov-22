function pipesInPool(input) {

    let V = Number(input[0]);
    let firstPipeDebit = Number(input[1]);
    let secondPipeDebit = Number(input[2]);
    let h = Number(input[3]);

    let firstPipe = firstPipeDebit * h;
    let secondPipe = secondPipeDebit * h;

    let total = firstPipe + secondPipe;

    let percFirstPipe = ((firstPipe / total) * 100).toFixed(2);
    let percSecondPipe = ((secondPipe / total) * 100).toFixed(2);

    if (total <= V) {
        console.log(`The pool is ${(total/V) * 100}% full. Pipe 1: ${percFirstPipe}%. Pipe 2:${percSecondPipe}%.`);
    } else {
        console.log(`For ${h} hours the pool overflows with ${total - V} liters.`);
    }
    
}

pipesInPool(["1000", "100", "120", "3"]);