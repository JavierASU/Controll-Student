const { Router } = require("express");
const { route } = require("../app");
const router = Router()

const { PostAL, GetALL, GetOne, DeleteAl, EditAL } = require("../controllers/alumnos");


router.post("/alumno", PostAL)
router.get("/alumno", GetALL)
router.get("/alumno/:id", GetOne)
router.delete("/alumno/:id", DeleteAl)
router.put("/alumno/:id", EditAL)



module.exports