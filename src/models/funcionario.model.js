module.exports = (sequelize, Sequelize) => {
  const Funcionario = sequelize.define("funcionario", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    primeiroNome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ultimoNome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salario: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    cargo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    setor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    logradouro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numeroCasa: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pais: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Funcionario;
};
