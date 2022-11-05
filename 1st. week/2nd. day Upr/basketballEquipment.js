function basketballEquipment(input){
    let yearlyTax = Number(input[0]);
    let basketShoes = (yearlyTax - (yearlyTax*0.4));
    let basketClothes = (basketShoes - (basketShoes*0.2));
    let basketBall = ((basketClothes*0.25));
    let basketAccs = ((basketBall*0.2));
    let total = yearlyTax + basketShoes + basketClothes + basketBall + basketAccs;
    console.log(total);

}

basketballEquipment(["550"])