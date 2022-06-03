function problem3(inventory){
    let carModels = [];
    for (index = 0; index < inventory.length; index++) {
        carModels.push(inventory[index].car_model)
    }
    carModels.sort();
    console.log(carModels);
    }
    module.exports = problem3;