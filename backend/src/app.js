const express = require('express');
const cors = require('cors');
const morgan = require("morgan")
const { PostAL, GetALL, GetOne, DeleteAl, EditAL, GetForFilter } = require('./alum.controllers/alumnos');
const { GetALLS, GetOneS, PostALS, DeleteSC } = require("./alum.controllers/seccion");
const { GetALLG, GetOneG, PostALG, DeleteG } = require('./alum.controllers/grados');
const { GetALLM, GetOneM, PostM, DeleteM } = require('./alum.controllers/materias');
const { PostF } = require('./fact.controllers/facturacion');
const { metod } = require('./fact.controllers/metod');
const { PostC } = require('./fact.controllers/concepto');



const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))


//routes alumno
app.use(PostAL);
app.use(GetALL);
app.use(GetOne);
app.use(DeleteAl);
app.use(EditAL)
app.use(GetForFilter)


//routes seccion
app.use(GetALLS);
app.use(GetOneS);
app.use(PostALS);
app.use(DeleteSC);


//routes grado
app.use(GetALLG);
app.use(GetOneG);
app.use(PostALG);
app.use(DeleteG);


//routes materia
app.use(GetALLM);
app.use(GetOneM);
app.use(PostM);
app.use(DeleteM)

//Facturacion
app.use(PostF)

//metod
app.use(metod)

//concep
app.use(PostC)


module.exports = app;