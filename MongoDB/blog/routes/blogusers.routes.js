const { blogUser } = require("../models/index.js");

module.exports = app => {
  const blogUser = require("../controllers/bloguser.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", blogUser.create);

  // Retrieve all Tutorials
  router.get("/", blogUser.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", blogUser.findAllPublished);

  // // Retrieve a single Tutorial with id
  router.get("/:id", blogUser.findOne);

  // // Update a Tutorial with id
  router.put("/:id", blogUser.update);

  // // Delete a Tutorial with id
  router.delete("/:id", blogUser.delete);

  // // Create a new Tutorial
  router.delete("/", blogUser.deleteAll);

  app.use("/api/users", router);
};
