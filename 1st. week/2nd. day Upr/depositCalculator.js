function depositCalculator (input) {
    let deposit = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearlyPer = Number(input[2])/100;
    let finalSum = deposit + depositTerm * ((deposit * yearlyPer)/12);
    console.log(finalSum);
    }

    depositCalculator(["2350", "6", "7"])