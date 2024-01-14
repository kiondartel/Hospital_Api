// controllers/PlanosController.js
const Plano = require("../models/Plano");

const PlanosController = {
  async getAllPlanos(req, res) {
    // 2º apos ser chamado ele espera a reposta de findAll de Plano (Model)
    try {
      const planos = await Plano.findAll(); // ORM gera uma consulta SQL para buscar todos os registros na tabela de planos
      res.status(201).json(planos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async createPlane(req, res) {
    try {
      const { nome, valor, ativo } = req.body; // Extrai os dados do corpo da requisição
      // Verifica se os campos obrigatórios estão presentes
      if (!nome) {
        return res.status(400).send("Nome é obrigatório");
      }
      // Cria um novo plano no banco de dados
      const novoPlano = await Plano.create({ nome, valor, ativo });
      // Retorna o plano criado
      res.status(201).json(novoPlano);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async deletePlanoByName(req, res) {
    try {
      const nome = req.params.nome; // Captura o nome do plano da URL
      // Encontra e exclui o plano pelo nome
      const plano = await Plano.findOne({ where: { nome } });
      if (!plano) {
        return res.status(404).send("Plano não encontrado");
      }
      await plano.destroy();

      res.send(`Plano '${nome}' excluído com sucesso.`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = PlanosController;
