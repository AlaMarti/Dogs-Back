const { Router } = require('express');
const {Dog} = require("../db")
const countryRoute = require("./dogRoute")
const tempRoute = require("./temperamentRoute")
const demoroute = require("./demoRoute")
const razaRoute = require("./razaRoute")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/dog", countryRoute)
router.use("/demo", demoroute)
router.use("/temperaments", tempRoute)
router.use("/raza", razaRoute)





module.exports = router;
