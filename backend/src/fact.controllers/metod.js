const express = require("express");
const router = express.Router();

const pool = require("../database");




const metod = router.post("/metod", async (req, res) => {
    const {
        pagoM,
        transF,
        efectivo,
    } = req.body;
    const newMet = {
       pagoM,
       transF,
       efectivo
    };
    await pool.query("INSERT INTO metodo set ?", [newMet], (err, rows, fields) => {
        if (!err) {
            res.json("Data save");
        } else {
            console.log(err);
        }
    });
    res.send("recibido");
});


module.exports = { metod }