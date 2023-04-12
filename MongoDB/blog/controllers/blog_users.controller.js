const Blog_users = require("../models/blog_users.model.js");

// Create and Save a new Blog_users
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Blog_user
  const blog_users = new Blog_users({
    f_name: req.body.f_name,
    l_name: req.body.l_name,
    user_name: req.body.user_name || false
  });

  // Save Blog_users in the database
  Blog_users.create(blog_users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Blog_users."
      });
    else res.send(data);
  });
};

// Retrieve all Blog_users from the database.
exports.findAll = (req, res) => {
  const f_name = req.query.f_name;

  Blog_users.getAll(f_name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blog_users."
      });
    else res.send(data);
  });
};

// Retrieve all Blog_users from the database.
exports.findOne = (req, res) => {
  const id = req.params.id;

  Blog_users.getOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blog_users."
      });
    else res.send(data);
  });
};

// Update a Blog_users from the database.
exports.update = (req, res) => {
  const id = req.params.id;
  const newF_name = req.body.f_name;
  const newL_name = req.body.l_name
  const newUser_name = req.body.user_name
Blog_users.updateOne(id, newF_name, newL_name, newUser_name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blog_users."
      });
    else res.send(data);
  });
};

// Delete a Blog_users from the database.
exports.deleteOne = (req, res) => {
  const id = req.params.id;
  Blog_users.deleteOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blog_users."
      });
    else res.send(data);
  });
};

// Delete all Blog_users from the database.
exports.deleteAll = (req, res) => {
  Blog_users.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blog_users."
      });
    else res.send(data);
  });
};