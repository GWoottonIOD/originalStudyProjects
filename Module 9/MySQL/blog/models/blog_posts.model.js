const sql = require("./db.js");

// constructor
const Blog_posts = function(posts) {
  this.title = posts.title;
  this.description = posts.description;
  this.image = posts.image;
  this.user_id = posts.user_id;
};

Blog_posts.create = (newPost, result) => {
  sql.query("INSERT INTO posts SET ?", newPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created posts: ", { id: res.insertId, ...newPost });
    result(null, { id: res.insertId, ...newPost });
  });
};

Blog_posts.getAll = (title, result) => {
  let query = "SELECT * FROM posts";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Blog_posts.getOne = (id, result) => {
  let query = "SELECT * FROM posts";

  if (id) {
    query += ` WHERE id = ${id}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Blog_posts.updateOne = (id, newTitle, newDescription, newImage, newUser_id, result) => {
  let query = "update posts set";

  if (newTitle) {
    query += ` title='${newTitle}'`;
    comma=true 
  }
  if (newDescription) {
    query += (comma?', ' : ' ')+`description='${newDescription}'`;
    comma=true 
  }
  if (newImage){
    query += (comma?', ' : ' ')+`image='${newImage}'`;
  }
  if (newUser_id){
    query += (comma?', ' : ' ')+`user_id=${newUser_id}`;
  }
  query +=  ` WHERE id=${id}`
  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Blog_posts.deleteOne = (id,result) => {
  let query = "DELETE FROM posts";

  if (id) {
    query += ` WHERE id = ${id}`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

Blog_posts.deleteAll = (result) => {
  let query = "DELETE FROM posts";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("posts: ", res);
    result(null, res);
  });
};

module.exports = Blog_posts;