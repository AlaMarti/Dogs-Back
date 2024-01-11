const { Dog, Temperament } = require("../db")
const axios = require("axios")
const {API} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?${API}`



const findDogById = async (validate, id) => {

    console.log("Soy find", id)
    console.log(typeof(id))

    if (validate) {
        const dog = await Dog.findByPk(id, {
            // where: status,

            include: {
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        if (!dog) throw Error("No existe")
        return dog
    } else{

        const idnum = parseInt(id)
        const {data} = await axios.get(URL)
        const apiInfoFil = await data.filter(e => e.id === idnum);

        return apiInfoFil
    }
}

module.exports = findDogById