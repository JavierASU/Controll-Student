const express = require("express");
const router = express.Router();

const pool = require("../database")

//Get a todos los datos
const GetALL = router.get("/alumno", (req, res) => {
    pool.query("SELECT * FROM alumno", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    })
})

//Get por ID
const GetOne = router.get("/alumno/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await pool.query("SELECT * FROM alumno WHERE alumno_id = ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    })
})


//Post insert datos 
const PostAL = router.post("/alumno", async (req, res) => {
    const { alumno_id, cedula, primerN, segundoN, primerA, segundoA, sexo, fechaDN } = req.body;
    const newal = {
        alumno_id,
        cedula,
        primerN,
        segundoN,
        primerA,
        segundoA,
        sexo,
        fechaDN
    };
    await pool.query("INSERT INTO alumno set ?", [newal], (err, rows, fields) => {
        if (!err) {
            res.json("Data save");
        } else {
            console.log(err)
        }
    });
    res.send("recibido")
})

//Delete ID
const DeleteAl = router.delete("/alumno/:id", async (req, res) => {
    const { id } = req.params;
    pool.query("DELETE FROM alumno WHERE alumno_id =?", [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Alumno: "Eliminado" });

        } else {
            console.log(err);
        }
    })
})

const EditAL = router.put("/alumno/:id", async (req, res) => {

    pool.query("UPDATE FROM alumno SET alumno_id =?", [req.body], (err, rows, fields) => {
        if (!err) {
            res.json({ Alumno: "Eliminado" });

        } else {
            console.log(err);
        }
    })
})
module.exports = { GetALL, PostAL, GetOne, DeleteAl, EditAL }