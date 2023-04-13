module.exports = app => {
  const vehicles = require("../controllers/vehicles.controller.js");

  var router = require("express").Router();

  // Create a new Vehicle
  router.post("/", vehicles.create);

  // // Initialise the database
  router.get("/init", vehicles.init);

  // // Retrieve all Vehicle
  router.get("/", vehicles.findAll);

  // // Retrieve all published Vehicle
  router.get("/search/:letter", vehicles.findByStartingLetter);

  // // Retrieve a single Vehicle with id
  router.get("/:id", vehicles.findOne);

  // // Update a Vehicle with id
  router.put("/:id", vehicles.update);

  // // Delete a Vehicle with id
  router.delete("/:id", vehicles.deleteOne);

  // // Delete all Vehicle
  router.delete("/", vehicles.deleteAll);

  // // lock all Vehicle
  router.lock("/", vehicles.lockAll);

  // // unlock all Vehicle
  router.unlock("/", vehicles.unlockAll);

  app.use('/api/vehicles', router);
};

