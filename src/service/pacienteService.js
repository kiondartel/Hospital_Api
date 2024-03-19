const Patients = require("../models/Pacientes");
const Plano = require("../models/Plano");
const PacienteService = {
  async getAllPatients() {
    return await Patients.findAll({
      include: [{ model: Plano, as: "plano" }],
    });
  },

  async createPatient(patientData) {
    return await Patients.create(patientData);
  },

  async findPatientByName(name) {
    return await Patients.findOne({ where: { nome: name } });
  },

  async deletePatient(patient) {
    await patient.destroy();
  },
};

module.exports = PacienteService;
