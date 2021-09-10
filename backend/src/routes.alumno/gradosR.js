const { Router } = require("express");
const { route } = require("../app");
const router = Router();


const { GetALLG, GetOneG, PostALG, DeleteG } = require("../controllers/grados");



router.get("/grados", GetALLG);
router.get("/grados", GetOneG);
router.post("/grados", PostALG);
router.delete("/grados", DeleteG)

module.exports