module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  router.post("/", products.create);
  router.get("/", products.findAll);
  router.delete("/:id", products.delete);
  router.put("/:id", products.update);

  // // Retrieve all published Tutorials
  // router.get("/published", products.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", products.findOne);

  // // Update a Tutorial with id

  // // Delete all Tutorials
  // router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
