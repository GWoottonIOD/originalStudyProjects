module.exports = app => {
    const likes = require("../controllers/likes.controller.js");
  
    var router = require("express").Router();
  
    // Create a new likes
    router.post("/", likes.create);
  
    // // Initialise the likes
    router.get("/init", likes.init);
  
    // // Retrieve all likes
    router.get("/", likes.findAll);
  
    // // Retrieve searched likes by userid
    router.get("/suid/:uid", likes.findByUserId);

    // // Retrieve searched likes by plantid
    router.get("/spid/:pid", likes.findByPlantId);
  
    // // Retrieve a likes by id
    router.get("/:id", likes.findOne);
  
    // // Update a likes by id
    router.put("/:id", likes.update);
  
    // // Delete a likes by id
    router.delete("/:id", likes.deleteOne);
  
    // // Delete all likes
    router.delete("/", likes.deleteAll);
  
    // // lock all likes
    router.lock("/", likes.lockAll);
  
    // // unlock all likes
    router.unlock("/", likes.unlockAll);
  
    app.use('/api/likes', router);
  };
  
  