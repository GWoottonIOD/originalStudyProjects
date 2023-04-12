const Blog_comments = require("../models/blog_comments.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log('creating')
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const blog_comments = new Blog_comments({
    user_id: req.body.user_id,
    post_id: req.body.post_id,
    comment: req.body.comment || false
  });

  // Save Tutorial in the database
  Blog_comments.create(blog_comments, (err, data) => {
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

  Blog_comments.getAll(title, (err, data) => {
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

  Blog_comments.getOne(id, (err, data) => {
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
  const newUser_id = req.body.user_id;
  const newPost_id = req.body.post_id
  const newComment = req.body.comment
Blog_comments.updateOne(id, newUser_id, newPost_id, newComment, (err, data) => {
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
  Blog_comments.deleteOne(id, (err, data) => {
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
  Blog_comments.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};