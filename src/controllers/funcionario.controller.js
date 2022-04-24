const db = require("../models");
const Funcionario = db.funcionarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (
    !req.body.primeiroNome ||
    !req.body.ultimoNome ||
    !req.body.salario ||
    !req.body.cargo ||
    !req.body.setor ||
    !req.body.logradouro ||
    !req.body.numeroCasa ||
    !req.body.cidade ||
    !req.body.estado ||
    !req.body.pais ||
    !req.body.cep
  ) {
    res.status(400).send({
      message: "Preencha todos os dados!",
    });
    return;
  }

  const funcionario = {
    primeiroNome: req.body.primeiroNome,
    ultimoNome: req.body.ultimoNome,
    salario: req.body.salario,
    cargo: req.body.cargo,
    setor: req.body.setor,
    logradouro: req.body.logradouro,
    numeroCasa: req.body.numeroCasa,
    cep: req.body.cep,
    cidade: req.body.cidade,
    estado: req.body.estado,
    pais: req.body.pais,
  };

  Funcionario.create(funcionario)
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
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Funcionario.findAll({ where: condition })
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
