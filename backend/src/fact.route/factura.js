const { Router } = require("express");
const { route } = require("../app");
const router = Router()

const { PostF } = require("../fact.controllers/facturacion");


router.post("/facturacion", PostF)