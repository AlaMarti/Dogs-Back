const {getApi} = require("../controllers/demo")
const  {Router} = require("express")

const express = require("express")


const server = express();
server.use(express.json());

const demoR = Router()


demoR.get("/", async(req, res)=>{
    try{
        const demo = await getApi()
        res.status(200).json(demo)

    } catch (error){
        res.status(400).json({error:error.message})
    }
})


module.exports = demoR