const {Temperament} = require("../db")

const findAllTemps = async () =>{
    const temps = await Temperament.findAll();
    return temps
}


module.exports = findAllTemps