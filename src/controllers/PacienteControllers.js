const Patients = require("../models/Pacientes");
const Plano = require("../models/Plano");
const PatientController = {
  async getAllPatients(req, res) {
    try {
      const patientes = await Patients.findAll();
      res.status(200).json(patientes);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async createPatient(req, res) {
    try {
      const {
        nome,
        dataNascimento,
        endereco,
        telefone,
        email,
        genero,
        codigoPlano,
      } = req.body;

      if (!nome) {
        return res.status(400).send("Nome é obrigatório");
      }

      const newPatient = await Patients.create({
        nome,
        dataNascimento,
        endereco,
        telefone,
        email,
        genero,
        codigoPlano,
      });

      res.status(201).json(newPatient);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async deletePatientByName(req, res) {
    try {
      const nome = req.params.nome;

      const patient = await Patients.findOne({ where: { nome } });
      if (!patient) {
        return res.status(404).send("Paciente não encontrado");
      }
      await patient.destroy();

      res.send(`Paciente '${nome}' excluído com sucesso.`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = PatientController;
