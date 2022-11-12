function areas (input) {
 
    let figure = input[0];

    if (figure === "square") {
        let a = Number(input[1]);
        console.log((a * a).toFixed(3));
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log ((a * b).toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1]);
        console.log((Math.PI * Math.pow(r, 2)).toFixed(3));
    } else if (figure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        console.log((a*h/2).toFixed(3));
    }
}

areas(["circle", 6]);