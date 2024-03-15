// controllers/PlanosController.js

const planosService = require("../service/planosService");

const PlanosController = {
  async getAllPlanos(req, res) {
    try {
      const planos = await planosService.getAllPlanos();
      res.status(200).json(planos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async createPlane(req, res) {
    try {
      const { nome, valor, ativo, procedimentos } = req.body;
      if (!nome) {
        return res.status(400).send("Nome é obrigatório");
      }
      const novoPlano = await planosService.createPlano(
        nome,
        valor,
        ativo,
        procedimentos
      );
      res.status(201).json(novoPlano);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async deletePlanoByName(req, res) {
    try {
      const { nome } = req.params;
      const planoExcluido = await planosService.deletePlano(nome);
      if (!planoExcluido) {
        return res.status(404).send("Plano não encontrado");
      }
      res.send(`Plano '${nome}' excluído com sucesso.`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async updatePlano(req, res) {
    try {
      const { codigo } = req.params;
      const { nome, valor, ativo, procedimentos } = req.body;
      const planoAtualizado = await planosService.updatePlano(
        codigo,
        nome,
        valor,
        ativo,
        procedimentos
      );
      if (!planoAtualizado) {
        return res.status(404).send("Plano não encontrado");
      }
      res.status(200).json(planoAtualizado);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = PlanosController;
