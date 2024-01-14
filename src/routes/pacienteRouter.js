const express = require("express");

const router = express.Router();

const PatientsController = require("../controllers/PacienteControllers");

router.get("/pacientes", PatientsController.getAllPatients);
router.post("/pacientes", PatientsController.createPatient);
router.delete("/pacientes/:nome", PatientsController.deletePatientByName);

module.exports = router;
