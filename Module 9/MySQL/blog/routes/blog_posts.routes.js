module.exports = app => {
  const blog_posts = require("../controllers/blog_posts.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", blog_posts.create);

  // // Retrieve all Tutorials
  router.get("/", blog_posts.findAll);

  // // Retrieve a single Tutorial with id
  router.get("/:id", blog_posts.findOne);

  // // Update a Tutorial with id
  router.put("/:id", blog_posts.update);

  // // Delete a Tutorial with id
  router.delete("/:id", blog_posts.deleteOne);

  // // Delete all Tutorials
  router.delete("/", blog_posts.deleteAll);

  app.use('/api/blogposts', router);
};

