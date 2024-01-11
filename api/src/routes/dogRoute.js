const  {Router} = require("express")
const {findAllDogs, getallInfo} = require("../controllers/findAllDogs")
const createnewDog = require("../controllers/createNewDog")
const findDogById = require("../controllers/findDogById")
const deleteDog = require("../controllers/deleteDog")
const express = require("express")


const server = express();
server.use(express.json());

const dogRoute = Router()


dogRoute.get("/", async (req,res) => {
 
    try {
       const name = req.query.name
       console.log(name)
        const dogs =  name ? await getallInfo(name) : await getallInfo();
        res.status(200).json(dogs)

    } catch (error) {
        res.status(500).json({error: error.message})
    }

})


dogRoute.get("/:id", async(req,res)=>{
    try{
        const {id} = req.params
        const validate = isNaN(id)
        
        console.log(validate)

        if(!validate){
            const dogId = await findDogById(validate,id)
            res.status(200).json(dogId)

        } else{

            const dogId = await findDogById(validate,id)
            res.status(200).json(dogId)
        }
        
    

    } catch (error){
        res.status(400).json({error: error.message})

    }
})


dogRoute.delete("/:id", async(req,res)=>{
    try{
        const {id} = req.params
        const DogDelete = await deleteDog(id)
        res.status(200).json(DogDelete)

    } catch(error){
        res.status(400).json({error: error.message})


    }
})

dogRoute.post("/", async (req,res) =>{
    try{
        const {name,weight_min, weight_max, height_min, height_max,Temperament } = req.body

        console.log(Temperament)
    
        const newDog = await createnewDog({name,weight_min, weight_max, height_min, height_max,Temperament})       
        res.status(200).json(newDog)
    } catch (error){
        res.status(400).json({error: error.message})
    }
})


module.exports = dogRoute