module.exports = (app) => {
  const produtos = require("../controllers/produto.controller.js");

  var router = require("express").Router();

  router.post("/", produtos.create);
  router.get("/", produtos.findAll);

  app.use("/api/produtos", router);
};
