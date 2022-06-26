const db = require("../models");
const Produtos = db.produtos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (
    !req.body.nome ||
    !req.body.preco ||
    !req.body.descricaoCurta ||
    !req.body.descricaoLonga ||
    !req.body.quantidade ||
    !req.body.url_foto
  ) {
    res.status(400).send({
      message: "Preencha todos os dados!",
    });
    return;
  }

  const produto = {
    nome: req.body.nome,
    preco: req.body.preco,
    descricaoCurta: req.body.descricaoCurta,
    descricaoLonga: req.body.descricaoLonga,
    quantidade: req.body.quantidade,
    url_foto: req.body.url_foto,
  };

  Produtos.create(produto)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee.",
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { name: { [Op.like]: `%${nome}%` } } : null;

  Produtos.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Employee.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Funcionario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "O funcionario foi atualizado com sucesso",
        });
      } else {
        res.send({
          message: `O funcionario com o id = ${id} não foi atualizado com sucesso`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Funcionario.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "O funcionario foi excluido com sucesso!",
        });
      } else {
        res.send({
          message: `O funcionario com o id=${id} não foi apagado com sucesso!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};

// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Product.findByPk(id)
//     .then((data) => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Tutorial with id=${id}.`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id,
//       });
//     });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Product.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials.",
//       });
//     });
// };

// // find all published Tutorial
// exports.findAllPublished = (req, res) => {
//   Product.findAll({ where: { published: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// };
