function seq(input) {

    let n = Number(input[0]);
    let c = 1;

    while (c <= n) {
        console.log(c);
        c = c * 2 + 1;
    }

}

seq(["31"]);