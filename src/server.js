require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes/planosRouter");

const server = express();
server.use(cors());

// Middleware para analisar JSON
server.use(express.json());

// Middleware para analisar corpos codificados em URL
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/api", routes);

server.listen(process.env.PORT, () => {
  console.log(`servidor rodando em ${process.env.PORT}`);
});
