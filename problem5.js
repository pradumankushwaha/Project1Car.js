function problem5(inventory){
    let oldCars =[];
    for (index = 0; index < inventory.length; index++){
        if (inventory[index].car_year < 2000) {
            oldCars.push(inventory[index].car_year)
        }
    }
    console.log(oldCars.length);
    }

module.exports=problem5;