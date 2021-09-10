const express = require("express");
const router = express.Router();

const pool = require("../database");




const PostC = router.post("/concep", async (req, res) => {
    const {
        inscripcion,
        mensualidad
    } = req.body;
    const newC = {
        inscripcion,
        mensualidad
    };
    await pool.query("INSERT INTO concepto set ?", [newC], (err, rows, fields) => {
        if (!err) {
            res.json("Data save");
        } else {
            console.log(err);
        }
    });
    res.send("recibido");
});


module.exports = { PostC }