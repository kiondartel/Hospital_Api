const PacienteService = require("../service/pacienteService");

const PatientController = {
  async getAllPatients(req, res) {
    try {
      const patients = await PacienteService.getAllPatients();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async createPatient(req, res) {
    try {
      const newPatient = await PacienteService.createPatient(req.body);
      res.status(201).json(newPatient);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async deletePatientByName(req, res) {
    try {
      const nome = req.params.nome;
      const patient = await PacienteService.findPatientByName(nome);

      if (!patient) {
        return res.status(404).send("Paciente não encontrado");
      }

      await PacienteService.deletePatient(patient);
      res.send(`Paciente '${nome}' excluído com sucesso.`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
module.exports = PatientController;
