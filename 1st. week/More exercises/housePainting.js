function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let strStena = x * y;
    let window = 1.5 * 1.5;
    let strStenaAndWindow = strStena*2 - window*2;
    let back = x * x;
    let door = 1.2 * 2;
    let totalFrontAndBack = back*2 - door;
    let totalPlosht = strStenaAndWindow + totalFrontAndBack;
    let greenPaint = totalPlosht/3.4;
    let totalGreen = greenPaint.toFixed(2); 
    
    let roofPravoagalnik = 2 * (x * y);
    let roofTriangle = 2 * (x * h / 2);
    let obshtPlosht = roofPravoagalnik + roofTriangle;
    let redPaint = obshtPlosht / 4.3
    let totalRedPaint = redPaint.toFixed(2);

    console.log(totalGreen);
    console.log(totalRedPaint);
}
housePainting(["10.25", "15.45", "8.88"])