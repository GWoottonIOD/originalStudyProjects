const sql = require("./db.js");

// constructor
//Creates a new plant
const Likes = function(likes) {
  this.UserId = likes.UserId;
  this.PlantId = likes.PlantId;
};

Likes.create = (newLike, result) => {
  sql.query("INSERT INTO likes SET ?", newLike, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created likes: ", { id: res.insertId, ...newLike });
    result(null, { id: res.insertId, ...newLike });
  });
};

//Gets all likes
Likes.getAll = (PlantCName, limit, offset, result) => {
  let query = "SELECT * FROM likes";

  if (PlantCName) {
    query += ` WHERE PlantCName LIKE '%${PlantCName}%'`;
  }
  if (limit) {
    query += ` LIMIT ${limit}`;
  }
  if (offset) {
    query += ` OFFSET ${offset}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets like by id
Likes.getOne = (id, result) => {
  let query = "SELECT * FROM likes";

  if (id) {
    query += ` WHERE id = '${id}'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets likes by UserId in common name
Likes.getByUserId = (uid, result) => {
  let query = "SELECT UserId FROM likes";

  if (uid) {
    query += ` WHERE UserId LIKE '%${uid}%'`;
  }
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets likes by UserId in common name
Likes.getByPlantId = (pid, result) => {
  let query = "SELECT PlantId FROM likes";

  if (pid) {
    query += ` WHERE PlantId LIKE '%${pid}%'`;
  }
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets all likes by vitamins
Likes.getAllVitamins = (result) => {
  let query = "SELECT PlantVitamins FROM likes";
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets likes by minerals
Likes.getByMinerals = (letters, result) => {
  let query = "SELECT * FROM likes";

  if (letters) {
    query += ` WHERE PlantMinerals LIKE "%${letters.replace(',','%')}%"`;
  }
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets all likes by minerals
Likes.getAllMinerals = (result) => {
  let query = "SELECT PlantMinerals FROM likes";
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets likes by pharma features
Likes.getByPharma = (letters, result) => {
  let query = "SELECT * FROM likes";

  if (letters) {
    query += ` WHERE PlantPharmaProps LIKE "%${letters.replace(',','%')}%"`;
  }
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Gets all likes by pharma features
Likes.getAllPharma = (result) => {
  let query = "SELECT PlantPharmaProps FROM likes";
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Updates a plant by id
Likes.updateOne = (id, newPlantCName, newPlantLName, newPlantVitamins, newPlantMinerals,newPlantPharmaProps, newPlantIMGURL, NewPlantDesc, result) => {
  let query = "update likes set";

  let comma = false
  if (newPlantIMGURL){
    query += ` PlantIMGURL="${newPlantIMGURL}"`;
    comma=true 
  }
  if (newPlantCName) {
    query += (comma?', ' : ' ')+`PlantCName='${newPlantCName}'`;
    comma=true 
  }
  if (newPlantLName) {
    query += (comma?', ' : ' ')+`PlantLName='${newPlantLName}'`;
    comma=true 
  }
  if (newPlantVitamins){
    query += (comma?', ' : ' ')+`PlantVitamins="${newPlantVitamins}"`;
    comma=true 
  }
  if (newPlantMinerals){
    query += (comma?', ' : ' ')+`PlantMinerals="${newPlantMinerals}"`;
    comma=true 
  }
  if (newPlantPharmaProps){
    query += (comma?', ' : ' ')+`PlantPharmaProps="${newPlantPharmaProps}"`;
    comma=true 
  }
  if (NewPlantDesc){
    query += (comma?', ' : ' ')+`PlantDesc="${NewPlantDesc}"`;
  }
  query +=  ` WHERE id=${id}`
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Deletes a plant by id
Likes.deleteOne = (id,result) => {
  let query = "DELETE FROM likes";

  if (id) {
    query += ` WHERE id = '${id}'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Deletes all likes
Likes.deleteAll = (result) => {
  let query = "DELETE FROM likes";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Locks all likes
Likes.lockAll = (result) => {
  let query = "LOCK TABLES likes read";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

//Unlocks all likes
Likes.unlockAll = (result) => {
  let query = "UNLOCK TABLES";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("likes: ", res);
    result(null, res);
  });
};

module.exports = Likes;