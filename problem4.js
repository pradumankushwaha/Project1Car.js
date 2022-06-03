function problem4(inventory){
    let carYears = [];
    for (index = 0; index < inventory.length; index++) {
       carYears.push(inventory[index].car_year);
    }
    console.log(carYears);

}
module.exports=problem4;