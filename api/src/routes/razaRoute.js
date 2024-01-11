const { Router } = require("express")
const express = require("express")
const { getRazaById } = require("../controllers/getRazaById")

const server = express();
server.use(express.json());

const razaRoute = Router()


razaRoute.get("/:IdRaza", async (req, res) => {

    try {
        const { IdRaza } = req.params
        const raza = await getRazaById(IdRaza)
        res.status(200).json(raza)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = razaRoute