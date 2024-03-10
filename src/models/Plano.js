const Sequelize = require("sequelize");
const sequelize = require("../db");

// Models são representações das tabelas do banco de dados
///
//
const Plano = sequelize.define(
  // 3º .define mapea a estrutura de uma tabela do seu banco de dados
  "plano",
  {
    codigo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING(30),
      require: true,
    },
    valor: {
      type: Sequelize.INTEGER,
    },
    procedimentos: {
      type: Sequelize.TEXT,
    },
    ativo: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false, // Desabilita a criação automática das colunas createdAt e updatedAt
  }
);

module.exports = Plano;
