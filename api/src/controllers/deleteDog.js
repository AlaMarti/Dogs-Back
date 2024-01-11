const {Dog} = require("../db")

const deleteDog = async (id) => {
    if(!id) throw Error("No existe ID ")
    const dog = await Dog.findByPk(id);
    const aux = {...dog}
    await dog.destroy()

    return aux

}

module.exports = deleteDog