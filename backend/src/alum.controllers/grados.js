const express = require("express");
const router = express.Router();

const pool = require("../database");

//Get a todos los datos
const GetALLG = router.get("/grados", (req, res) => {
    pool.query("SELECT * FROM grado", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    })
});

//Get por ID
const GetOneG = router.get("/grados/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await pool.query("SELECT * FROM grado WHERE grado_id = ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
});


//Post insert datos 
const PostALG = router.post("/grados", async (req, res) => {
    const {
        grado } = req.body;
    const newG = {
        grado
    };
    await pool.query("INSERT INTO grado set ?", [newG], (err, rows, fields) => {
        if (!err) {
            res.json("Data save");
        } else {
            console.log(err)
        }
    });
    res.send("recibido")
})

//Delete ID
const DeleteG = router.delete("/grados/:id", async (req, res) => {
    const { id } = req.params;
    pool.query("DELETE FROM grado WHERE grado_id =?", [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Grado: "Eliminado" });

        } else {
            console.log(err);
        }
    })
})


module.exports = { GetALLG, GetOneG, PostALG, DeleteG }