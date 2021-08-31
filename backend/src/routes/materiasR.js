const { router, route } = require("../app");
const { Router } = require("express")
const router = Router()


const { GetALLM, GetOneM, PostM, DeleteM } = require("../controllers/materias");



router.get("/materias", GetALLM);
router.get("/materias", GetOneM);
router.post("/materias", PostM);
router.delete("/materias", DeleteM)

module.exports