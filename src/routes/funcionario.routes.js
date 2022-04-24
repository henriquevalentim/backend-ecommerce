module.exports = (app) => {
  const funcionarios = require("../controllers/funcionario.controller.js");

  var router = require("express").Router();

  router.post("/", funcionarios.create);
  router.get("/", funcionarios.findAll);
  router.delete("/:id", funcionarios.delete);
  router.put("/:id", funcionarios.update);

  // router.get("/:id", products.findOne);

  // // Retrieve all published Tutorials
  // router.get("/published", products.findAllPublished);

  // // Retrieve a single Tutorial with id

  // // Update a Tutorial with id

  // // Delete all Tutorials
  // router.delete("/", products.deleteAll);

  app.use("/api/funcionarios", router);
};
