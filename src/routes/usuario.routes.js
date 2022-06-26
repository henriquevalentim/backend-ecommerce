module.exports = (app) => {
  const usuarios = require("../controllers/usuario.controller.js");

  var router = require("express").Router();

  router.post("/cadastrar", usuarios.cadastrar);
  router.post("/login", usuarios.login);
  router.get("/:email", usuarios.getUsuario);
  router.put("/:id", usuarios.update);

  app.use("/api/usuarios", router);
};
