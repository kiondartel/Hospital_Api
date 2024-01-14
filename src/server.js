require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const Plansroutes = require("./routes/planosRouter");
const Patientsroutes = require("./routes/pacienteRouter");

const server = express();
server.use(cors());

// Middleware para analisar JSON
server.use(express.json());

// Middleware para analisar corpos codificados em URL
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/v1", Plansroutes);
server.use("/v1", Patientsroutes);

server.listen(process.env.PORT, () => {
  console.log(`servidor rodando em ${process.env.PORT}`);
});
