const express = require("express");
const router = express.Router();

const pool = require("../database");




const PostF = router.post("/facturacion", async (req, res) => {
    const {
        razonS,
        domicilioF,
        Rif,
        telefono,
        fecha,
        concepto,
        monto,
        total
    } = req.body;
    const newF = {
        razonS,
        domicilioF,
        Rif,
        telefono,
        fecha,
        concepto,
        monto,
        total
    };
    await pool.query("INSERT INTO facturacion set ?", [newF], (err, rows, fields) => {
        if (!err) {
            res.json("Data save");
        } else {
            console.log(err);
        }
    });
    res.send("recibido");
});


module.exports = { PostF }

  //crea dtb para metodo de pago que sea y para concepto de pago