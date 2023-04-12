module.exports = app => {
  const blog_user = require("../controllers/blog_users.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", blog_user.create);

  // // Retrieve all Tutorials
  router.get("/", blog_user.findAll);

  // // Retrieve a single Tutorial with id
  router.get("/:id", blog_user.findOne);

  // // Update a Tutorial with id
  router.put("/:id", blog_user.update);

  // // Delete a Tutorial with id
  router.delete("/:id", blog_user.deleteOne);

  // // Delete all Tutorials
  router.delete("/", blog_user.deleteAll);

  app.use('/api/blogusers', router);
};

