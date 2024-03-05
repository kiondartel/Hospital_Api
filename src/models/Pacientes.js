const Sequelize = require("sequelize");
const sequelize = require("../db");
const Plano = require("./Plano");

const Paciente = sequelize.define(
  "Paciente",
  {
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dataNascimento: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
    },
    telefone: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    genero: {
      type: Sequelize.STRING,
    },
    genero: {
      type: Sequelize.STRING,
    },
    descricaoPaciente: {
      type: Sequelize.STRING(1000),
      allowNull: true,
    },
    codigoPlano: {
      type: Sequelize.INTEGER,
      references: {
        model: "plano",
        key: "codigo",
      },
    },
  },
  {
    timestamps: true,
  }
);

Paciente.belongsTo(Plano, {
  foreignKey: "codigoPlano",
  as: "plano",
});

module.exports = Paciente;
