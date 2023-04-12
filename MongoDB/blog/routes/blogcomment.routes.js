const { blogComment } = require("../models/index.js");

module.exports = app => {
    const blogComment = require("../controllers/blogComment.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", blogComment.create);
  
    // Retrieve all Tutorials
    router.get("/", blogComment.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", blogComment.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    router.get("/:id", blogComment.findOne);
  
    // // Update a Tutorial with id
    router.put("/:id", blogComment.update);
  
    // // Delete a Tutorial with id
    router.delete("/:id", blogComment.delete);
  
    // // Create a new Tutorial
    router.delete("/", blogComment.deleteAll);
  
    app.use("/api/comments", router);
  };
  