function repainting (input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workingHours = Number(input[3]);
    let nylonSum = (nylon +2)*1.5;
    let paintSum = (paint + (paint*0.1))*14.50;
    let thinnerSum = thinner*5;
    let totalMaterialSum = nylonSum+paintSum+thinnerSum+0.40
    let workingHoursSum = (totalMaterialSum*0.3)*workingHours;
    let total = totalMaterialSum + workingHoursSum;
    console.log(total);

}
repainting(["5", "10", "10", "1"])