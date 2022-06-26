module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("produto", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    descricaoCurta: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricaoLonga: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantidade: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    url_foto: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Produto;
};
