function problem6(inventory){
    let BMWAudi =[];
    for (index = 0; index < inventory.length; index++){
        if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi'){
            BMWAudi.push(inventory[index])
         }
        }
        console.log (JSON.stringify(BMWAudi));
    }
module.exports=problem6;