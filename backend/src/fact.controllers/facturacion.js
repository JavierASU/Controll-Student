const express = require("express");
const router = express.Router();

const pool = require("../database");


const GetALLFC = router.get("/facturacion", (req, res) => {
  pool.query(
    `
      select factura_id, Rif, razonS,domicilioF, telefono, fecha, concepto, monto, total  from facturacion
      
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

const getForFill = router.get("/facturacion/filtro/:Rif", async (req, res) => {
  const { Rif } = req.params;

  await pool.query(
    `select factura_id, Rif, razonS,domicilioF, telefono, fecha, concepto, monto, total  from facturacion
      
    WHERE Rif like '${Rif}%'`,
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
})

const EditFC = router.put("/facturacion", async (req, res) => {
  const {
    factura_id,
    razonS,
    domicilioF,
    Rif,
    telefono,
    fecha,
    concepto,
    monto,
    total
  } = req.body;

  pool.query(
    `UPDATE facturacion SET
    razonS  = ?,
    domicilioF = ?,
    Rif = ?,
    telefono = ?,
    fecha = ?,
    concepto = ?,
    monto = ?,
    total = ?
    WHERE factura_id = ?    
    `,
    [
      factura_id,
      razonS,
      domicilioF,
      Rif,
      telefono,
      fecha,
      concepto,
      monto,
      total
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Factura: "Modificada" });
      } else {
        console.log(err);
      }
    }
  );
});

const DeleteFC = router.delete("/facturacion/:id", async (req, res) => {
  const { id } = req.params;
  pool.query(
    "DELETE FROM facturacion WHERE factura_id =?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Factura: "Eliminadoa" });
      } else {
        console.log(err);
      }
    }
  );
});


module.exports = { PostF, GetALLFC, getForFill, EditFC, DeleteFC }

  //crea dtb para metodo de pago que sea y para concepto de pago