function supForSchool(input){
    let pencil = Number(input[0]);              //5.8
    let marker = Number(input[1]);              //7.2
    let litersDet = Number(input[2]);            //1.2/l
    let discount = Number(input[3])/100;
    let sum = (pencil*5.8) + (marker*7.2) + (litersDet*1.2);
    let finalSum = sum - (sum * discount);
    console.log(finalSum);
 }

supForSchool(["2", "3", "4", "25"])