const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.blogUser = require("./bloguser.model.js")(mongoose);
db.blogPost = require("./blogpost.model.js")(mongoose);
db.blogComment = require("./blogcomment.model.js")(mongoose);

// const db2 = {};
// db2.mongoose = mongoose;
// db2.url = dbConfig.url;
// db2.blogUser = require("./blogpost.model.js")(mongoose);

// const db3 = {};
// db3.mongoose = mongoose;
// db3.url = dbConfig.url;
// db3.blogUser = require("./blogcomment.model.js")(mongoose);

module.exports = db;
