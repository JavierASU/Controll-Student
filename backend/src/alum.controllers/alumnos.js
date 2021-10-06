const express = require("express");
const router = express.Router();

const pool = require("../database");

//Get a todos los datos
const GetALL = router.get("/alumno", (req, res) => {
  pool.query(
    `
    select alumno_id, cedula, primerN,segundoN, primerA,segundoA, sexo, fechaDN, seccion.seccion_id,seccion, grado.grado_id, grado, materias.materia_id, materia from alumno
    
    join seccion
    on seccion.seccion_id = alumno.seccion_id
    
    join grado
    on grado.grado_id = seccion.grado_id
    
    join materias
    on materias.materia_id = materias.materia_id
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

//Get por ID
const GetOne = router.get("/alumno/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await pool.query(
    `
    select alumno_id, cedula, primerN,segundoN, primerA,segundoA, sexo, fechaDN, seccion.seccion_id,seccion, grado.grado_id, grado, materias.materia_id, materia from alumno
    
    join seccion
    on seccion.seccion_id = alumno.seccion_id
    
    join grado
    on grado.grado_id = seccion.grado_id
    
    join materias
    on materias.materia_id = materias.materia_id
    WHERE alumno_id = ?`,
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

//Get por filtro de cedila
const GetForFilter = router.get("/alumno/filtro/:cedula", async (req, res) => {
  const { cedula } = req.params;

  await pool.query(
    `select alumno_id, cedula, primerN,segundoN, primerA,segundoA, sexo, fechaDN, seccion.seccion_id,seccion, grado.grado_id, grado, materias.materia_id, materia from alumno
    
    join seccion
    on seccion.seccion_id = alumno.seccion_id
    
    join grado
    on grado.grado_id = seccion.grado_id
    
    join materias
    on materias.materia_id = materias.materia_id
    WHERE cedula like '${cedula}%'`,
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

//Post insert datos
const PostAL = router.post("/alumno", async (req, res) => {
  const {
    //alumno_id,
    cedula,
    primerN,
    segundoN,
    primerA,
    segundoA,
    sexo,
    fechaDN,
    seccion_id,
  } = req.body;
  const newal = {
    //alumno_id,
    cedula,
    primerN,
    segundoN,
    primerA,
    segundoA,
    sexo,
    fechaDN,
    seccion_id,
  };
  await pool.query("INSERT INTO alumno set ?", [newal], (err, rows, fields) => {
    if (!err) {
      res.json("Data save");
    } else {
      console.log(err);
    }
  });
  res.send("recibido");
});

//Delete ID
const DeleteAl = router.delete("/alumno/:id", async (req, res) => {
  const { id } = req.params;
  pool.query(
    "DELETE FROM alumno WHERE alumno_id =?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Alumno: "Eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});

const EditAL = router.put("/alumno", async (req, res) => {
  const {
    alumno_id,
    cedula,
    primerN,
    segundoN,
    primerA,
    segundoA,
    sexo,
    fechaDN,
    seccion_id,
  } = req.body;

  pool.query(
    `UPDATE alumno SET
    cedula = ?, 
    primerN = ?,
    segundoN = ?, 
    primerA = ?,
    segundoA = ?, 
    sexo = ?, 
    fechaDN = ?,
    seccion_id = ?
    WHERE alumno_id = ?    
    `,
    [
      cedula,
      primerN,
      segundoN,
      primerA,
      segundoA,
      sexo,
      fechaDN,
      seccion_id,
      alumno_id,
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Alumno: "Modificado" });
      } else {
        console.log(err);
      }
    }
  );
});
module.exports = { GetALL, PostAL, GetOne, DeleteAl, EditAL, GetForFilter };
