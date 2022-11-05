function radToDeg (input) {
    let radian = parseFloat(input[0]);
    let deg = radian * 180 / Math.PI;
    console.log(deg);

}

radToDeg(["6.2832"])
//Напишете програма, която чете ъгъл в радиани (десетично число) и го преобразува в градуси. 
//Използвайте формулата: градус = радиан * 180 / π. Числото π в Java програми е достъпно чрез Math.PI.