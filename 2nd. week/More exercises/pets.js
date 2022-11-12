function pets(input) { 

    let vacDays = Number(input[0]);
    let food = Number(input[1]);
    let foodDog = Number(input[2]);
    let foodCat = Number(input[3]);
    let foodTurtle = Number(input[4]);

    let dogFood = vacDays * foodDog;
    let catFood = vacDays * foodCat;
    let turtleFood = (vacDays * foodTurtle) / 1000;
    
    let totalFood = dogFood + catFood + turtleFood;

    if (totalFood <= food) {
        //let left = Math.floor(totalFood - food);
        console.log(`${Math.floor(food - totalFood)} kilos of food left.`);
    } else {
       // let need = Math.ceil(food - totalFood);
        console.log(`${Math.ceil(totalFood - food)} more kilos of food are needed.`);
    }
}

pets(["5", "10", "2.1", "0.8", "321"]);
