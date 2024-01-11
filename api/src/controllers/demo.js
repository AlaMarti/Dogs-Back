const axios  = require("axios")
const {API} = process.env
const URL = `https://api.thedogapi.com/v1/breeds?${API}`


const getApi = async () => {
 const {data} = await axios.get(URL)
 const apiInfo = await data.map(e => {
    return { 
        id: e.id,
        name: e.name,
        image: e.image.url,
        breed_group: e.breed_group,
        temperament: e.temperament,
        life_span: e.life_span,
        weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
        weight_max: parseInt(e.weight.metric.slice(4).trim()),
        height_min: parseInt(e.height.metric.slice(0, 2).trim()),
        height_max: parseInt(e.height.metric.slice(4).trim()),
     };
});
return apiInfo;

}

module.exports = {getApi}