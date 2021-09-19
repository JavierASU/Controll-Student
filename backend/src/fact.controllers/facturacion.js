const express = require("express");
const router = express.Router();

const pool = require("../database");


const GetALLFC = router.get("/facturacion", (req, res) => {
    pool.query(
      `
      select alumno_id, Rif, razonS,segundoN, primerA,segundoA, sexo, fechaDN, seccion.seccion_id,seccion, grado.grado_id, grado from alumno
      join seccion
      on seccion.seccion_id=alumno.seccion_id
      join grado
      on grado.grado_id = seccion.grado_id;
    `,
      (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });


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


module.exports = { PostF, GetALLFC }

  //crea dtb para metodo de pago que sea y para concepto de pago