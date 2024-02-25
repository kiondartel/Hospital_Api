const express = require("express");

const router = express.Router();

const PatientsController = require("../controllers/PacienteControllers");

router
  .route("/pacientes")
  .get(PatientsController.getAllPatients)
  .post(PatientsController.createPatient);

router.delete("/pacientes/:nome", PatientsController.deletePatientByName);

module.exports = router;
