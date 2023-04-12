const { blogPost } = require("../models/index.js");

module.exports = app => {
    const blogPost = require("../controllers/blogpost.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", blogPost.create);
  
    // Retrieve all Tutorials
    router.get("/", blogPost.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", blogPost.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", blogPost.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", blogPost.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", blogPost.delete);
  
    // // Create a new Tutorial
    router.delete("/", blogPost.deleteAll);
  
    app.use("/api/posts", router);
  };
  