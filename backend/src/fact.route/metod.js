const { Router } = require("express");
const { route } = require("../app");
const router = Router()


const { metod } = require("../fact.controllers/metod");


router.post("/metod", metod)