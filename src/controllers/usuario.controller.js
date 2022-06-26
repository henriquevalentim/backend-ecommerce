const db = require("../models");
const Usuarios = db.usuarios;
const md5 = require("md5");

exports.cadastrar = (req, res) => {
  if (
    !req.body.nome ||
    !req.body.email ||
    !req.body.senha ||
    !req.body.cpf ||
    !req.body.dataNascimento ||
    !req.body.telefone ||
    !req.body.cep ||
    !req.body.numeroCasa ||
    !req.body.logradouro ||
    !req.body.cidade ||
    !req.body.estado
  ) {
    res.status(400).send({
      message: "Preencha todos os dados",
    });
    return;
  }

  console.log(new Date());

  const user = {
    nome: req.body.nome,
    email: req.body.email,
    senha: md5(req.body.senha),
    dataNascimento: req.body.dataNascimento,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
    cep: req.body.cep,
    numeroCasa: req.body.numeroCasa,
    logradouro: req.body.logradouro,
    cidade: req.body.cidade,
    estado: req.body.estado,
  };

  Usuarios.findOne({
    where: { email: req.body.email },
  })
    .then((data) => {
      if (data !== null) {
        res.status(400).send({
          message: "Este usuario ja existe",
        });
      } else {
        Usuarios.create(user)
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User.",
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.login = (req, res) => {
  if (!req.body.email || !req.body.senha) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  Usuarios.findOne({
    where: { email: req.body.email, senha: md5(req.body.senha) },
  })
    .then((data) => {
      if (data !== null) {
        res.status(200).send(data);
      } else {
        res.status(404).send({ message: "E-mail ou senha incorretos" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.getUsuario = (req, res) => {
  const email = req.params.email;
  if (!email) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  Usuarios.findOne({
    where: { email: email },
  })
    .then((data) => {
      if (data !== null) {
        res.status(200).send(data);
      } else {
        res.status(404).send({ message: "Usuario não encontrado" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Usuarios.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "O usuario foi atualizado com sucesso",
        });
      } else {
        res.send({
          message: `O usuario com o id = ${id} não foi atualizado com sucesso`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating usuario with id=" + id,
      });
    });
};
