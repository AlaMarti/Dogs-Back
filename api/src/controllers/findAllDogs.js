const { Dog, Temperament } = require("../db")
const { getApi } = require("./demo")
const axios = require("axios")
const { API } = process.env
const URL = `https://api.thedogapi.com/v1/breeds?${API}`
const URL2 = "https://api.thedogapi.com/v1/breeds/search?q="
const { Op } = require('sequelize');



const findAllDogs = async (breed_group) => {
    const dogs = await Dog.findAll(
        {
            // where: breed_group,

            include: {
                model: Temperament,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        }

    );

    return dogs;


};


const getallInfo = async (name) => {
    if (name) {
        const { data } = await axios.get(URL)
        const apiInfoFil2 = await data.filter(e => e.name === name);
        if(apiInfoFil2.length > 0){
             return apiInfoFil2
        } else{
            const nameBD = await Dog.findOne({
                where: {name: {[Op.iLike]: `${name}%`,}},
                
                include: {
                    model: Temperament,
                    through:{
                        attributes: [],
                    }
                }

            })
            return nameBD
        }

       


    } else {

        const BDinfo = await findAllDogs()
        const APIinfo = await getApi()
        const infototal = APIinfo.concat(BDinfo)

        return infototal
    }

}

module.exports = { findAllDogs, getallInfo }

