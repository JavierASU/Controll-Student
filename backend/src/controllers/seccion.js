const express = require("express");
const router = express.Router();

const pool = require("../database");

//Get a todos los datos
const GetALLS = router.get("/seccion", (req, res) => {
    pool.query("SELECT * FROM seccion", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    })
})

//Get por ID
const GetOneS = router.get("/seccion/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await pool.query("SELECT * FROM seccion WHERE seccion_id = ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
})


//Post insert datos 
const PostALS = router.post("/seccion", async (req, res) => {
    const { seccion_id, seccion } = req.body;
    const newSc = {
        seccion_id,
        seccion
    };
    await pool.query("INSERT INTO seccion set ?", [newSc], (err, rows, fields) => {
        if (!err) {
            res.json("Data save");
        } else {
            console.log(err)
        }
    });
    res.send("recibido")
})


//Delete ID
const DeleteSC = router.delete("/seccion/:id", async (req, res) => {
    const { id } = req.params;
    pool.query("DELETE FROM seccion WHERE seccion_id =?", [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Seccion: "Eliminado" });

        } else {
            console.log(err);
        }
    })
})








module.exports = { GetALLS, GetOneS, PostALS, DeleteSC }