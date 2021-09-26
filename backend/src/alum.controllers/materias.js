const express = require("express");
const router = express.Router();

const pool = require("../database");

//Get a todos los datos
const GetALLM = router.get("/materias", (req, res) => {
  pool.query("SELECT * FROM materias", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//Get por ID
const GetOneM = router.get("/materias/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await pool.query(
    "SELECT * FROM materias WHERE materia_id = ?",
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

//Post insert datos
const PostM = router.post("/materias", async (req, res) => {
  const { materia, grado_id } = req.body;
  
  const newMateria = {
    materia,
    grado_id,
  };

  await pool.query(
    "INSERT INTO materias set ?",
    [newMateria],
    (err, rows, fields) => {
      if (!err) {
        res.json("Data save");
      } else {
        console.log(err);
      }
    }
  );
  res.send("recibido");
});

//Delete ID
const DeleteM = router.delete("/materias/:id", async (req, res) => {
  const { id } = req.params;
  pool.query(
    "DELETE FROM materias WHERE materia_id =?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Materia: "Eliminado" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = { GetOneM, GetALLM, PostM, DeleteM };
