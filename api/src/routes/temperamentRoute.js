const  {Router} = require("express")
const express = require("express")
const findAllTemp = require("../controllers/findAllTemp")
const createnewTemp = require("../controllers/createnewTemp")
const server = express();
server.use(express.json());

const tempRoute = Router()

tempRoute.get("/", async (req,res)=>{
    try{
        const temperaments = await findAllTemp();
        res.status(200).json(temperaments)

    } catch (error){
        res.status(500).json({error: error.message})
    }

})



tempRoute.post("/", async (req,res)=>{
    try{
        const {name, id} = req.body
        const newTemp = await createnewTemp(name, id)
        res.status(200).json(newTemp)

    } catch(error){
        res.status(400).json({error: error.message})

    }

})




module.exports = tempRoute
