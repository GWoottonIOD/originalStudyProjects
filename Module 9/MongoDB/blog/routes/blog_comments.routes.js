module.exports = app => {
  const blog_comments = require("../controllers/blog_comments.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", blog_comments.create);

  // // Retrieve all Tutorials
  router.get("/", blog_comments.findAll);

  // // Retrieve a single Tutorial with id
  router.get("/:id", blog_comments.findOne);

  // // Update a Tutorial with id
  router.put("/:id", blog_comments.update);

  // // Delete a Tutorial with id
  router.delete("/:id", blog_comments.deleteOne);

  // // Delete all Tutorials
  router.delete("/", blog_comments.deleteAll);

  app.use('/api/blogcomments', router);
};

