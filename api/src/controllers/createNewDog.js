const {Dog} = require("../db")

const createnewDog = async ({name,weight_min, weight_max, height_min, height_max,Temperament}) =>{
    console.log(Temperament)
    const newDog = await Dog.create({name,weight_min, weight_max, height_min, height_max,Temperament})
    newDog.addTemperament(Temperament)
    
    return newDog

}


module.exports = createnewDog