// services/planosService.js

const Plano = require("../models/Plano");

const planosService = {
  async getAllPlanos() {
    return await Plano.findAll();
  },

  async createPlano(nome, valor, ativo, procedimentos) {
    return await Plano.create({ nome, valor, ativo, procedimentos });
  },

  async getPlanoByName(nome) {
    return await Plano.findOne({ where: { nome } });
  },

  async updatePlano(codigo, nome, valor, ativo, procedimentos) {
    const plano = await Plano.findByPk(codigo);
    if (!plano) {
      return null;
    }

    plano.nome = nome || plano.nome;
    plano.valor = valor || plano.valor;
    plano.ativo = ativo || plano.ativo;
    plano.procedimentos = procedimentos || plano.procedimentos;
    await plano.save();
    return plano;
  },

  async deletePlano(nome) {
    const plano = await Plano.findOne({ where: { nome } });
    if (!plano) {
      return false;
    }
    await plano.destroy();
    return true;
  },
};

module.exports = planosService;
