const Sequelize = require("sequelize");
const sequelize = require("../db");

const Department = sequelize.define(
  "Department",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Department;
