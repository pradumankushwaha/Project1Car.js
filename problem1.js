function problem1(inventory){
       for(let index=1 ; index <inventory.length;index++){
              if(inventory[index].id==33){
              console.log(`car 33 is a  ${inventory[index].car_year} ${inventory[index].car_make} ${inventory[index].car_model}`)
              }
       }
}
module.exports=problem1;