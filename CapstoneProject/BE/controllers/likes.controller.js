const Likes = require("../models/likes.model.js");
const LikeFetch = require('../helper/LikeFetch.js')

// Create and Save a new likw
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Fields must be filled in."
    });
  }
  console.log(req.body)

  // Create a like
  const likes = new Likes({
    UserId : req.body.UserId,
    PlantId: req.body.PlantId,
  });

  // Save like in the database
  Likes.create(likes, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not create new like(s) at this time."
      });
    else res.send(data);
  });
};

//checks if the data in the db matches whats in the , fetches from 3rd party API
exports.init = (req, res) => {
  LikeFetch.dbSetUp((err, data) => {
  if (err)
      res.status(500).send({
        message:
          err.message || "Could not add all likes at this time."
      });
    else res.send({message: 'Like(s) added successfully'});
  })}



// Retrieve all likes from the database.
exports.findAll = (req, res) => {
  const PlantId = req.query.PlantId;
  const limit = req.query.limit;
  const offset = req.query.offset;

  Likes.getAll(PlantId, limit, offset, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not retrieve all like(s) at this time."
      });
    else res.send(data);
  });
};

// Retrieve all likes from the database by search
exports.findByUserId = (req, res) => {
  const uid = req.params.uid;
  Likes.getByUserId(uid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not find like(s) at this time."
      });
    else res.send(data);
  });
};

// Retrieve all likes from the database by search
exports.findByPlantId = (req, res) => {
  const pid = req.params.pid;
  Likes.getByPlantId(pid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not find like(s) at this time."
      });
    else res.send(data);
  });
};

// Retrieve a like from the database.
exports.findOne = (req, res) => {
  const id = req.params.id;

  Likes.getOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not find like by ID at this time."
      });
    else res.send(data);
  });
};

// Update a like from the database.
exports.update = (req, res) => {
  const id = req.params.id;
  const newUserId=req.body.UserName;
  const newPlantId = req.body.PassWord
  Likes.updateOne(id, newUserId, newPlantId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not update this like."
      });
    else res.send(data);
  });
};

// Delete a like from the database.
exports.deleteOne = (req, res) => {
  const id = req.params.id;
  Likes.deleteOne(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not delete this like."
      });
    else res.send(data);
  });
};

// Delete all likes from the database.
exports.deleteAll = (req, res) => {
  Likes.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not delete all likes."
      });
    else res.send(data);
  });
};

//locks the table from being written
exports.lockAll = (req, res) => {
  Likes.lockAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not lock all likes."
      });
    else res.send(data);
  });
};

//unlocks this table
exports.unlockAll = (req, res) => {
  Likes.unlockAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Could not unlock all likes."
      });
    else res.send(data);
  });
};