const Blog_posts = require("../models/blog_posts.model.js");
const RedisLibrary = require('../libraries/redis')
const redisCleint = new RedisLibrary();

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const post = new Blog_posts({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image, 
    user_id: req.body.user_id || false
  });

  // Save Tutorial in the database
  Blog_posts.create(post, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;

  Blog_posts.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database.
exports.findOne = (req, res) => {
  const id = req.params.id;

  Blog_posts.getOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial from the database.
exports.update = (req, res) => {
  const id = req.params.id;
  const newTitle = req.body.title;
  const newDescription = req.body.description
  const newImage = req.body.image
  const newUser_id = req.body.user_id
Blog_posts.updateOne(id, newTitle, newDescription, newImage, newUser_id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Delete a Tutorial from the database.
exports.deleteOne = (req, res) => {
  const id = req.params.id;
  Blog_posts.deleteOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Blog_posts.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};