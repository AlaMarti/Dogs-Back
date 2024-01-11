const axios = require("axios")
const {Dog} = require("../db")
const URL = 'https://api.thedogapi.com/v1/breeds/search?q='

const getRazaById = async (IdRaza) => {


    const { data } = await axios.get(URL + (IdRaza.toLowerCase()))


    if (data.length > 0) {
        return data
    }



}


module.exports = { getRazaById }