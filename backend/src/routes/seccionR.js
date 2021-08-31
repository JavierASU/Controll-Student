const { Router } = require("express");
const { route } = require("../app");
const router = Router()


const { GetALLS, GetOneS, PostALS, DeleteSC } = require("../controllers/seccion");

router.get("/seccion", GetALLS)
router.get("/seccion", GetOneS)
router.post("seccion", PostALS)
router.delete("seccion", DeleteSC)




module.exports