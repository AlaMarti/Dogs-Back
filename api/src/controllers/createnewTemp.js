const {Temperament} = require("../db")

const createnewTemp = async(name,id) =>{
    const newTemp = await Temperament.create({name,id})
    return newTemp
}

module.exports = createnewTemp